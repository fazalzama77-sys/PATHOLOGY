# -*- coding: utf-8 -*-
"""
build-revision-data.py
------------------------------------------------------------------
Reads the printable revision sheets in  revision/unit-*.html
and writes the app data file        data/data-revision.JS

The sheets stay the source of truth for the CONTENT.
This script only re-packages them so js/revision.js can render
them inside the app (offline, from file:// as well as http).

RUN IT AGAIN whenever you edit any revision/unit-*.html:
    python tools/build-revision-data.py
------------------------------------------------------------------
"""

import io
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "revision")
OUT = os.path.join(ROOT, "data", "data-revision.JS")

UNIT_META = {
    1: ("unit-1", "General Veterinary Pathology", "paper-1", "cell"),
    2: ("unit-2", "Systemic Veterinary Pathology", "paper-1", "organs"),
    3: ("unit-3", "Oncology, Clinical Pathology and Necropsy", "paper-1", "microscope"),
    4: ("unit-4", "Pathology of Infectious and Non-infectious Diseases", "paper-2", "virus"),
    5: ("unit-5", "Avian Pathology", "paper-2", "bird"),
    6: ("unit-6", "Pathology of Diseases of Laboratory and Wild Animals", "paper-2", "paw"),
}

PAGE_RE = re.compile(
    r'<section class="page">(.*?)</section>', re.S)
MASTHEAD_RE = re.compile(
    r'<div class="masthead">.*?<h1>(.*?)</h1>', re.S)
BOX_RE = re.compile(
    r'<div class="box (t[1-6])">\s*<h2>(.*?)</h2>\s*<div class="body">(.*?)\n      </div>\s*</div>',
    re.S)
FIB_RE = re.compile(r'<div class="fib">(.*?)</div>', re.S)


def clean(s):
    return re.sub(r'\s+', ' ', s).strip()


def strip_tags(s):
    return clean(re.sub(r'<[^>]+>', '', s))


def kinds_of(html):
    k = []
    if '<table' in html:
        k.append('table')
    if 'class="chain' in html or 'class="flow' in html:
        k.append('flow')
    if 'class="trap"' in html:
        k.append('trap')
    if 'class="mem"' in html:
        k.append('mem')
    if 'class="fact"' in html:
        k.append('fact')
    if 'class="fib"' in html:
        k.append('drill')
    return k


def build_unit(no):
    uid, title, paper, icon = UNIT_META[no]
    path = os.path.join(SRC, "unit-%d.html" % no)
    src = io.open(path, encoding="utf-8").read()

    pages = PAGE_RE.findall(src)
    if not pages:
        raise SystemExit("no pages parsed in " + path)

    page_titles = []
    boxes = []
    drill = []
    n = 0

    for pi, page in enumerate(pages, start=1):
        m = MASTHEAD_RE.search(page)
        page_titles.append(strip_tags(m.group(1)) if m else ("Page %d" % pi))

        found = BOX_RE.findall(page)
        if not found:
            raise SystemExit("no boxes parsed on page %d of %s" % (pi, path))

        for tone, heading, body in found:
            n += 1
            heading = clean(heading)
            # heading looks like "12 · SOME TITLE ★★"
            mh = re.match(r'^\s*(\d+)\s*·\s*(.*)$', strip_tags(heading))
            label = mh.group(2) if mh else strip_tags(heading)
            stars = label.count('★')
            label = clean(label.replace('★', '')).rstrip(' -—')

            body = body.strip()
            k = kinds_of(body)

            box = {
                "id": "%s-b%02d" % (uid, n),
                "n": n,
                "page": pi,
                "tone": tone,
                "title": label,
                "stars": stars,
                "kinds": k,
                "html": body,
            }

            if 'drill' in k:
                items = FIB_RE.findall(body)
                for di, it in enumerate(items, start=1):
                    drill.append({
                        "id": "%s-d%03d" % (uid, di),
                        "html": clean(it),
                    })
                box["drill"] = True
                box["html"] = ""          # rendered from the drill array instead
            boxes.append(box)

    return {
        "id": uid,
        "no": no,
        "title": title,
        "paper": paper,
        "icon": icon,
        "pages": len(pages),
        "pageTitles": page_titles,
        "sheet": "revision/unit-%d.html" % no,
        "boxes": boxes,
        "drill": drill,
    }


def main():
    units = [build_unit(n) for n in sorted(UNIT_META)]

    head = (
        "/* ============================================================\n"
        "   data-revision.JS  —  RAPID REVISION SHEETS (app copy)\n"
        "   ------------------------------------------------------------\n"
        "   *** GENERATED FILE — DO NOT EDIT BY HAND. ***\n"
        "\n"
        "   The content lives in  revision/unit-1.html … unit-6.html,\n"
        "   which are also the printable A4 sheets. After editing any of\n"
        "   those, regenerate this file by double-clicking\n"
        "       tools/rebuild-revision.bat\n"
        "   (or running  python tools/build-revision-data.py).\n"
        "\n"
        "   Shape:\n"
        "     revisionData[unitId] = {\n"
        "       id, no, title, paper, icon, pages, pageTitles, sheet,\n"
        "       boxes: [ { id, n, page, tone, title, stars, kinds[], html } ],\n"
        "       drill: [ { id, html } ]          // <u>…</u> marks the answer\n"
        "     }\n"
        "   tone t1..t6 = blue, teal, purple, amber, coral, sage\n"
        "   ============================================================ */\n\n"
        "var revisionData = {};\n\n"
    )

    parts = [head]
    for u in units:
        parts.append('revisionData["%s"] = %s;\n\n' % (
            u["id"], json.dumps(u, ensure_ascii=False, indent=1)))

    parts.append(
        "/* Convenience list in unit order. Do not edit. */\n"
        "var revisionUnits = Object.keys(revisionData).map(function (k) "
        "{ return revisionData[k]; });\n"
    )

    io.open(OUT, "w", encoding="utf-8").write("".join(parts))

    tb = sum(len(u["boxes"]) for u in units)
    td = sum(len(u["drill"]) for u in units)
    tp = sum(u["pages"] for u in units)
    print("wrote %s" % OUT)
    print("  %d units, %d pages, %d boxes, %d drill items"
          % (len(units), tp, tb, td))
    for u in units:
        print("   unit %d: %d pages, %2d boxes, %2d drill"
              % (u["no"], u["pages"], len(u["boxes"]), len(u["drill"])))


if __name__ == "__main__":
    main()
