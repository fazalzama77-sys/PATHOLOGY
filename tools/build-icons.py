#!/usr/bin/env python3
"""
build-icons.py  —  Generates the PWA icon set into images/.

Run this whenever the brand mark changes:

    python tools/build-icons.py

Produces:
    images/icon-192.png             launcher icon
    images/icon-512.png             launcher icon / splash
    images/icon-maskable-512.png    Android adaptive icon (full bleed)
    images/apple-touch-icon.png     iOS home screen (180x180)
    images/favicon-32.png           browser tab

The mark matches the in-app brand: a blue rounded square with a white
"VP" set in a bold face, same #1565c0 as the theme colour.
"""

import os
from PIL import Image, ImageDraw, ImageFont

BRAND = (21, 101, 192)      # #1565c0
INK = (255, 255, 255)
OUT = os.path.join(os.path.dirname(__file__), "..", "images")

# Draw everything oversized then downsample, so edges stay smooth.
SS = 4


def load_font(px):
    """Pick a bold face that exists on this machine."""
    for name in ("DejaVuSans-Bold.ttf", "arialbd.ttf", "Arial Bold.ttf",
                 "seguisb.ttf", "verdanab.ttf"):
        try:
            return ImageFont.truetype(name, px)
        except OSError:
            continue
    return ImageFont.load_default()


def draw_mark(size, maskable=False):
    """
    Render the VP mark at `size` px.

    maskable=True  -> full-bleed background and the text kept inside the
                      central 80% safe zone, so Android can crop the icon
                      to any shape without clipping the letters.
    """
    big = size * SS
    img = Image.new("RGBA", (big, big), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    if maskable:
        # No rounded corners: the launcher supplies its own shape.
        d.rectangle([0, 0, big, big], fill=BRAND)
        text_h = int(big * 0.34)          # small enough for the safe zone
    else:
        radius = int(big * 0.22)
        d.rounded_rectangle([0, 0, big - 1, big - 1], radius=radius, fill=BRAND)
        text_h = int(big * 0.46)

    font = load_font(text_h)
    box = d.textbbox((0, 0), "VP", font=font)
    x = (big - (box[2] - box[0])) / 2 - box[0]
    y = (big - (box[3] - box[1])) / 2 - box[1]
    d.text((x, y), "VP", font=font, fill=INK)

    return img.resize((size, size), Image.LANCZOS)


def save(img, name):
    path = os.path.normpath(os.path.join(OUT, name))
    img.save(path, "PNG", optimize=True)
    print("  wrote %-28s %d bytes" % (name, os.path.getsize(path)))


def main():
    os.makedirs(os.path.normpath(OUT), exist_ok=True)
    print("Building PWA icons ->", os.path.normpath(OUT))
    save(draw_mark(192), "icon-192.png")
    save(draw_mark(512), "icon-512.png")
    save(draw_mark(512, maskable=True), "icon-maskable-512.png")
    save(draw_mark(180), "apple-touch-icon.png")
    save(draw_mark(32), "favicon-32.png")
    print("Done.")


if __name__ == "__main__":
    main()
