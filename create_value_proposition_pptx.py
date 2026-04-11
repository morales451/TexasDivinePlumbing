#!/usr/bin/env python3
"""Generate the Value Proposition PowerPoint slide for Texas Divine Plumbing."""

from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

# ── Brand palette ──────────────────────────────────────────────────
NAVY       = RGBColor(0x0B, 0x1D, 0x3A)   # deep navy background
GOLD       = RGBColor(0xD4, 0xA0, 0x1E)   # accent gold
WHITE      = RGBColor(0xFF, 0xFF, 0xFF)
LIGHT_GRAY = RGBColor(0xE8, 0xEC, 0xF1)
DARK_GRAY  = RGBColor(0x2C, 0x3E, 0x50)
MED_GRAY   = RGBColor(0x5D, 0x6D, 0x7E)
SOFT_BLUE  = RGBColor(0x1A, 0x5C, 0x8A)
CARD_BG    = RGBColor(0xF7, 0xF9, 0xFC)
GREEN_ACC  = RGBColor(0x27, 0xAE, 0x60)
RED_ACC    = RGBColor(0xC0, 0x39, 0x2B)
CALLOUT_BG = RGBColor(0x0F, 0x2B, 0x4C)

prs = Presentation()
prs.slide_width  = Inches(13.333)
prs.slide_height = Inches(7.5)
SLIDE_W = Inches(13.333)
SLIDE_H = Inches(7.5)

slide_layout = prs.slide_layouts[6]  # blank
slide = prs.slides.add_slide(slide_layout)


# ── Helper functions ───────────────────────────────────────────────
def add_shape(left, top, width, height, fill_color, line_color=None):
    shape = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, left, top, width, height)
    shape.fill.solid()
    shape.fill.fore_color.rgb = fill_color
    if line_color:
        shape.line.color.rgb = line_color
        shape.line.width = Pt(1)
    else:
        shape.line.fill.background()
    return shape


def add_rounded_rect(left, top, width, height, fill_color, line_color=None):
    shape = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height)
    shape.fill.solid()
    shape.fill.fore_color.rgb = fill_color
    if line_color:
        shape.line.color.rgb = line_color
        shape.line.width = Pt(1)
    else:
        shape.line.fill.background()
    return shape


def add_text_box(left, top, width, height):
    return slide.shapes.add_textbox(left, top, width, height)


def set_paragraph(tf, text, font_size, color, bold=False, alignment=PP_ALIGN.LEFT, spacing_after=Pt(4)):
    tf.clear()
    p = tf.paragraphs[0]
    p.text = text
    p.font.size = Pt(font_size)
    p.font.color.rgb = color
    p.font.bold = bold
    p.alignment = alignment
    p.space_after = spacing_after
    return p


def add_paragraph(tf, text, font_size, color, bold=False, alignment=PP_ALIGN.LEFT,
                   spacing_before=Pt(0), spacing_after=Pt(4), italic=False):
    p = tf.add_paragraph()
    p.text = text
    p.font.size = Pt(font_size)
    p.font.color.rgb = color
    p.font.bold = bold
    p.font.italic = italic
    p.alignment = alignment
    p.space_before = spacing_before
    p.space_after = spacing_after
    return p


def add_bullet(tf, text, font_size, color, level=0, bold=False, spacing_after=Pt(3)):
    p = tf.add_paragraph()
    p.text = text
    p.font.size = Pt(font_size)
    p.font.color.rgb = color
    p.font.bold = bold
    p.level = level
    p.space_after = spacing_after
    return p


# ── 1. Background ─────────────────────────────────────────────────
add_shape(Inches(0), Inches(0), SLIDE_W, SLIDE_H, WHITE)

# ── 2. Top navy header bar ────────────────────────────────────────
add_shape(Inches(0), Inches(0), SLIDE_W, Inches(1.15), NAVY)

# Gold accent line under header
add_shape(Inches(0), Inches(1.15), SLIDE_W, Pt(4), GOLD)

# Title
tb = add_text_box(Inches(0.5), Inches(0.12), Inches(10), Inches(0.55))
tf = tb.text_frame
tf.word_wrap = True
set_paragraph(tf, "Value Proposition \u2013 Turning Velocity into Value", 26, WHITE, bold=True,
              alignment=PP_ALIGN.LEFT)

# Sub-header
tb = add_text_box(Inches(0.5), Inches(0.62), Inches(12), Inches(0.48))
tf = tb.text_frame
tf.word_wrap = True
set_paragraph(tf, ("Synchronized realignment of TDP\u2019s operations, marketing, and workforce "
                    "is the only sustainable path to exceeding the $2M revenue target."),
              12, LIGHT_GRAY, bold=False, alignment=PP_ALIGN.LEFT)

# ── 3. TDP branding tag (top-right) ───────────────────────────────
tb = add_text_box(Inches(11.2), Inches(0.2), Inches(1.8), Inches(0.45))
tf = tb.text_frame
tf.word_wrap = False
p = tf.paragraphs[0]
p.alignment = PP_ALIGN.RIGHT
run = p.add_run()
run.text = "TEXAS DIVINE"
run.font.size = Pt(10)
run.font.color.rgb = GOLD
run.font.bold = True
p2 = tf.add_paragraph()
p2.alignment = PP_ALIGN.RIGHT
run2 = p2.add_run()
run2.text = "PLUMBING"
run2.font.size = Pt(9)
run2.font.color.rgb = LIGHT_GRAY
run2.font.bold = False

# ── 4. Column 1 Card – Quantitative (The Hard ROI) ────────────────
MARGIN = Inches(0.5)
COL_GAP = Inches(0.3)
COL_TOP = Inches(1.45)
COL_W = (SLIDE_W - 2 * MARGIN - COL_GAP) / 2
COL_H = Inches(4.85)

# Card background
card1 = add_rounded_rect(MARGIN, COL_TOP, COL_W, COL_H, CARD_BG, RGBColor(0xDD, 0xDD, 0xDD))

# Gold accent bar at top of card
add_shape(MARGIN + Inches(0.15), COL_TOP + Inches(0.08), Pt(5), Inches(0.35), GOLD)

# Column 1 header
tb = add_text_box(MARGIN + Inches(0.35), COL_TOP + Inches(0.08), COL_W - Inches(0.5), Inches(0.35))
tf = tb.text_frame
tf.word_wrap = True
set_paragraph(tf, "QUANTITATIVE  \u2013  The Hard ROI", 14, NAVY, bold=True)

# Column 1 body content
tb = add_text_box(MARGIN + Inches(0.25), COL_TOP + Inches(0.48), COL_W - Inches(0.5), COL_H - Inches(0.55))
tf = tb.text_frame
tf.word_wrap = True
tf.auto_size = None

# -- Section: Activating the "Growth Reserve"
set_paragraph(tf, 'Activating the "Growth Reserve"', 11, SOFT_BLUE, bold=True, spacing_after=Pt(2))
add_bullet(tf, "TDP currently at 75% utilization on $1.25M revenue base", 9.5, DARK_GRAY, level=0)
add_bullet(tf, "Filling 25% latent capacity with high-margin commercial work adds ~$415k annual revenue \u2014 no additional CapEx required", 9.5, DARK_GRAY, level=0, spacing_after=Pt(6))

# -- Section: Self-Funding System Implementation
add_paragraph(tf, 'Self-Funding System Implementation', 11, SOFT_BLUE, bold=True, spacing_before=Pt(4), spacing_after=Pt(2))
add_bullet(tf, 'Procurement Savings: "Validated Pricing" + bulk staging projected to reduce material COGS by 10\u201312%', 9.5, DARK_GRAY, level=0)
add_bullet(tf, "Impact: ~$50k annual savings fully covers STACK subscription + part-time Director of Operations", 9.5, DARK_GRAY, level=0)
add_bullet(tf, 'Result: "Digital Brain" becomes a cost-neutral investment', 9.5, DARK_GRAY, level=0, spacing_after=Pt(6))

# -- Section: The Velocity Multiplier
add_paragraph(tf, 'The Velocity Multiplier', 11, SOFT_BLUE, bold=True, spacing_before=Pt(4), spacing_after=Pt(2))
add_bullet(tf, '"3-Day Underground" rule enables 3\u00d7 more project starts/year vs. standard 10-day cycles', 9.5, DARK_GRAY, level=0)
add_bullet(tf, "Bid more aggressively on high-spec retail contracts while maintaining 45\u201350% gross margins", 9.5, DARK_GRAY, level=0, spacing_after=Pt(6))

# -- Section: Bid-Throughput ROI
add_paragraph(tf, 'Bid-Throughput ROI', 11, SOFT_BLUE, bold=True, spacing_before=Pt(4), spacing_after=Pt(2))
add_bullet(tf, "Automated takeoffs reduce manual bid time by 80%", 9.5, DARK_GRAY, level=0)
add_bullet(tf, "Returns 40+ hrs/month of leadership time to Trino & Hector for GC networking", 9.5, DARK_GRAY, level=0)


# ── 5. Column 2 Card – Qualitative (The Strategic Shield) ─────────
col2_left = MARGIN + COL_W + COL_GAP

card2 = add_rounded_rect(col2_left, COL_TOP, COL_W, COL_H, CARD_BG, RGBColor(0xDD, 0xDD, 0xDD))

# Gold accent bar
add_shape(col2_left + Inches(0.15), COL_TOP + Inches(0.08), Pt(5), Inches(0.35), GOLD)

# Column 2 header
tb = add_text_box(col2_left + Inches(0.35), COL_TOP + Inches(0.08), COL_W - Inches(0.5), Inches(0.35))
tf = tb.text_frame
tf.word_wrap = True
set_paragraph(tf, "QUALITATIVE  \u2013  The Strategic Shield", 14, NAVY, bold=True)

# Column 2 body content
tb = add_text_box(col2_left + Inches(0.25), COL_TOP + Inches(0.48), COL_W - Inches(0.5), COL_H - Inches(0.55))
tf = tb.text_frame
tf.word_wrap = True
tf.auto_size = None

# -- Section: Passing the "90-Day Test"
set_paragraph(tf, 'Passing the "90-Day Test"', 11, SOFT_BLUE, bold=True, spacing_after=Pt(2))
add_bullet(tf, 'Transition from "Tribal Knowledge" to "Institutional Intelligence"', 9.5, DARK_GRAY, level=0)
add_bullet(tf, "Documenting SOPs + digitalizing Hector\u2019s precision logic keeps business operational without founders\u2019 constant presence", 9.5, DARK_GRAY, level=0, spacing_after=Pt(6))

# -- Section: De-Risking the Revenue Engine
add_paragraph(tf, 'De-Risking the Revenue Engine', 11, SOFT_BLUE, bold=True, spacing_before=Pt(4), spacing_after=Pt(2))
add_bullet(tf, '"Rule of Three" portfolio: no GC exceeds 33% of revenue \u2014 eliminates Wier Enterprises dependency risk', 9.5, DARK_GRAY, level=0)
add_bullet(tf, 'TDP evolves from "High-Risk Subcontractor" to "Stable Commercial Platform"', 9.5, DARK_GRAY, level=0, spacing_after=Pt(6))

# -- Section: The "Social Proof" Advantage
add_paragraph(tf, 'The "Social Proof" Advantage', 11, SOFT_BLUE, bold=True, spacing_before=Pt(4), spacing_after=Pt(2))
add_bullet(tf, "Pre-Pour Portfolio (time-stamped photo capture) provides undeniable evidence to win Tier-1 GCs (Linbeck, Bellows)", 9.5, DARK_GRAY, level=0)
add_bullet(tf, 'Transforms brand from "family shop" to "precision engineering partner" \u2014 removes GC fear of rework', 9.5, DARK_GRAY, level=0, spacing_after=Pt(6))

# -- Section: Defensible Talent Pipeline
add_paragraph(tf, 'Defensible Talent Pipeline', 11, SOFT_BLUE, bold=True, spacing_before=Pt(4), spacing_after=Pt(2))
add_bullet(tf, "Professionalized org structure + W-2 transition makes TDP the employer of choice", 9.5, DARK_GRAY, level=0)
add_bullet(tf, "Critical in a market facing a shortage of 500k plumbers", 9.5, DARK_GRAY, level=0)


# ── 6. KPI highlight badges (between cards and callout) ───────────
BADGE_TOP = COL_TOP + COL_H + Inches(0.15)
BADGE_H = Inches(0.45)
badge_data = [
    ("\u25b2 $415k", "Growth Reserve", GREEN_ACC),
    ("\u25bc 10-12%", "COGS Reduction", GREEN_ACC),
    ("3\u00d7", "Throughput", GOLD),
    ("80%", "Bid Time Saved", SOFT_BLUE),
    ("45-50%", "Gross Margins", GREEN_ACC),
]
badge_count = len(badge_data)
badge_total_w = SLIDE_W - 2 * MARGIN
badge_w = (badge_total_w - (badge_count - 1) * Inches(0.15)) / badge_count

for i, (val, label, accent) in enumerate(badge_data):
    bx = MARGIN + i * (badge_w + Inches(0.15))
    bg = add_rounded_rect(bx, BADGE_TOP, badge_w, BADGE_H, NAVY)
    # Gold top line on badge
    add_shape(bx + Inches(0.05), BADGE_TOP + Pt(2), badge_w - Inches(0.1), Pt(2), accent)

    tb = add_text_box(bx, BADGE_TOP + Pt(6), badge_w, BADGE_H - Pt(6))
    tf = tb.text_frame
    tf.word_wrap = False
    p = tf.paragraphs[0]
    p.alignment = PP_ALIGN.CENTER
    run = p.add_run()
    run.text = val
    run.font.size = Pt(13)
    run.font.color.rgb = accent
    run.font.bold = True

    run2 = p.add_run()
    run2.text = f"  {label}"
    run2.font.size = Pt(8.5)
    run2.font.color.rgb = LIGHT_GRAY
    run2.font.bold = False


# ── 7. Bottom Callout Box – Mission Impact ────────────────────────
CALLOUT_TOP = BADGE_TOP + BADGE_H + Inches(0.15)
CALLOUT_H = SLIDE_H - CALLOUT_TOP - Inches(0.2)
callout_bg = add_rounded_rect(MARGIN, CALLOUT_TOP, SLIDE_W - 2 * MARGIN, CALLOUT_H, CALLOUT_BG)

# Left gold accent bar in callout
add_shape(MARGIN + Inches(0.12), CALLOUT_TOP + Inches(0.1), Pt(4), CALLOUT_H - Inches(0.2), GOLD)

# Callout header
tb = add_text_box(MARGIN + Inches(0.4), CALLOUT_TOP + Inches(0.06), Inches(5), Inches(0.3))
tf = tb.text_frame
tf.word_wrap = True
set_paragraph(tf, "MISSION IMPACT  \u2013  The Sustainable Morales Legacy", 11, GOLD, bold=True, spacing_after=Pt(0))

# Callout body quote
tb = add_text_box(MARGIN + Inches(0.4), CALLOUT_TOP + Inches(0.32), SLIDE_W - 2 * MARGIN - Inches(0.9), CALLOUT_H - Inches(0.4))
tf = tb.text_frame
tf.word_wrap = True
set_paragraph(tf,
    ("\u201cTDP is at a crossroads: remain a high-performance job for the founders, or become a "
     "scalable enterprise asset for the family. By professionalizing today, we are ensuring that "
     "the Morales legacy is secured by systems\u2014not just mental math\u2014and remains the gold "
     "standard in Houston for the next 40 years.\u201d"),
    9.5, LIGHT_GRAY, bold=False, alignment=PP_ALIGN.LEFT, spacing_after=Pt(0))


# ── Save ───────────────────────────────────────────────────────────
output_path = "/home/user/TexasDivinePlumbing/TDP_Value_Proposition.pptx"
prs.save(output_path)
print(f"Saved: {output_path}")
