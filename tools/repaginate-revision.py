# -*- coding: utf-8 -*-
"""
repaginate-revision.py
------------------------------------------------------------------
Re-flows the cards in revision/unit-*.html into a new set of A4
pages, using a bin plan measured in a real browser.

WHY THIS EXISTS
    Each <section class="page"> is a fixed 297 mm A4 page. If you
    change the font size (the ★ THE KNOB line in
    revision/assets/revision.css) every page has to be re-packed,
    or content silently spills off the bottom when printed.

HOW TO USE
    1. Change the knob in revision/assets/revision.css
    2. Measure the cards in the browser and produce bins.json
       (see "Page budget" in CLAUDE-CONTEXT.md for the snippet)
    3. python tools/repaginate-revision.py tools/bins.json
    4. Re-run the overflow check — every page must say ok
    5. python tools/build-revision-data.py

bins.json shape:
    { "u1": [[0,1,2], [3,4,5]], "u2": [...] }   card indexes, in order
------------------------------------------------------------------
"""

import io
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "revision")

SHORT = {
    1: "General Veterinary Pathology",
    2: "Systemic Veterinary Pathology",
    3: "Oncology &middot; Clinical Pathology &middot; Necropsy",
    4: "Infectious &amp; Non-infectious Diseases",
    5: "Avian Pathology",
    6: "Laboratory &amp; Wild Animal Pathology",
}

BOX_RE = re.compile(
    r'<div class="box (t[1-6])">\s*<h2>(.*?)</h2>\s*<div class="body">(.*?)\n      </div>\s*</div>',
    re.S)
HEAD_RE = re.compile(r'(<body>.*?</div>\n)\s*<!-- ', re.S)


def boxes_of(src):
    """Every card in the file, in document order, as raw pieces."""
    return BOX_RE.findall(src)


def render_box(tone, heading, body):
    return ('    <div class="box %s">\n'
            '      <h2>%s</h2>\n'
            '      <div class="body">%s\n'
            '      </div>\n'
            '    </div>\n' % (tone, heading, body))


def repaginate(no, bins):
    path = os.path.join(SRC, "unit-%d.html" % no)
    src = io.open(path, encoding="utf-8").read()
    found = boxes_of(src)

    flat = [i for b in bins for i in b]
    if sorted(flat) != list(range(len(found))):
        raise SystemExit(
            "unit %d: bin plan covers %d cards but the file has %d"
            % (no, len(flat), len(found)))

    # everything before the first page section, and everything after the last
    first = src.index('<!-- ')
    head = src[:first]
    tail = "\n</body>\n</html>\n"

    total = len(bins)
    out = [head]
    n_seen = 0
    for pi, bin_ in enumerate(bins, start=1):
        a = n_seen + 1
        b = n_seen + len(bin_)
        n_seen = b
        out.append(
            '<!-- %s PAGE %d %s -->\n'
            '<section class="page">\n'
            '  <div class="masthead">\n'
            '    <span class="u">UNIT %d</span><h1>%s</h1>\n'
            '    <span class="pg">PAGE %d OF %d &middot; CARDS %d&ndash;%d</span>\n'
            '  </div>\n'
            '  <div class="cols">\n\n'
            % ("=" * 18, pi, "=" * 18, no, SHORT[no], pi, total, a, b))
        for i in bin_:
            tone, heading, body = found[i]
            out.append(render_box(tone, heading, body))
            out.append("\n")
        out.append('  </div>\n</section>\n\n')

    out.append(tail)
    io.open(path, "w", encoding="utf-8").write("".join(out))
    return total, len(found)


def main():
    if len(sys.argv) < 2:
        raise SystemExit("usage: python tools/repaginate-revision.py <bins.json>")
    plan = json.load(io.open(sys.argv[1], encoding="utf-8"))

    grand = 0
    for no in range(1, 7):
        bins = plan.get("u%d" % no)
        if not bins:
            print("  unit %d: no plan, left unchanged" % no)
            continue
        pages, cards = repaginate(no, bins)
        grand += pages
        print("  unit %d: %2d cards -> %d pages" % (no, cards, pages))
    print("  TOTAL: %d pages" % grand)
    print("\nNow re-run the overflow check, then:")
    print("  python tools/build-revision-data.py")


if __name__ == "__main__":
    main()
