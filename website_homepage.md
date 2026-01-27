# Homepage Architecture Plan - 9Sences

Based on the provided design screenshots, the **9Sences** homepage is structured as a minimalist, narrative-driven vertical scroll experience. It serves as a portal to a "Cultural Venture Platform," utilizing distinct content blocks to define its ecosystem.

## Design Philosophy & Visual System
- **Typography:** Clean, modern sans-serif fonts (likely Inter or Helvetica). Content is hierarchically structured with clear distinctions between headers, subheaders, and body text.
- **Color Palette:** 
  - **Primary:** Black text on White background (Minimalist).
  - **Accent:** Vibrant Yellow (used for specific ecosystem layers like *SenceMaison* and *Wellhaus* to distinguish "physical/experiential" spaces).
  - **Links:** Standard Blue (e.g., "Dream Hunter").
- **Layout:** Single-column, linear flow. Sections are often separated by horizontal dividers (`___`) or distinct background color blocks.

---

## Page Architecture

### 1. Hero Section
**Purpose:** Introduction and Call to Action.
- **Header:** "9Sences 网站内容" (Site Title/Logo).
- **Tagline:** "A Cultural Venture Platform".
- **Mission Statement:** "Investing in culture-led wellness, creative practices, and experiential ecosystems."
- **CTA:** Button/Link text "Explore the Ecosystem ↓" (anchor scroll to the Ecosystem section).

### 2. Introduction Section ("What Is 9Sences")
**Purpose:** High-level definition of the entity.
- **Title:** "What Is 9Sences"
- **Content:** Defines 9Sences as an "investment and incubation entity" focused on building and stewarding culture-led ventures.
- **Separator:** Horizontal line.

### 3. The Ecosystem Section
**Purpose:** Break down the three core verticals of the platform.

#### A. Cultural IP & Narrative Layer (Dream Hunter)
*Visual Style: Minimalist, White Background.*
- **Brand Name:** [Dream Hunter] (Blue Link).
- **Category:** "Cultural IP & Narrative Layer".
- **Key Offerings (Bullet Points):**
  - Dream Archive
  - Art & storytelling
  - Long-term cultural IP
- **Tagline:** *"Culture remembered."*

#### B. Practice & Experience Layer (SenceMaison)
*Visual Style: Vibrant Yellow Background, Black Text.*
- **Brand Name:** [SenceMaison] (Underlined).
- **Category:** "Practice & Experience Layer".
- **Key Offerings:**
  - Music-led practice
  - Healing & embodied experiences
  - Retreats & global collaborations
- **Tagline:** *"Culture made physical."*

#### C. Experiential Platform (Sence 91. Wellhaus)
*Visual Style: Vibrant Yellow Background, Black Text.*
- **Brand Name:** [Sence 91. Wellhaus] (Underlined).
- **Subtitle:** "An invite-only cultural and experiential platform".
- **Features List:** Strategic collaborations, Pop-up environments, Long-term brand value.
- **Exclusivity Note:** "Not public-facing. Not ticketed."
- **Action Block (Request Access):**
  - Criteria: Curated access, Cultural positioning, Brand & creator alignment.
- **Tagline:** *"Where selection creates value."*
- **Footer Note:** "Each operates independently, yet compounds value within the 9Sences ecosystem."

### 4. Methodology Section ("How We Work")
**Purpose:** Explain the operational model.
- **Title:** "How We Work".
- **Pillars:**
  1.  **Curate:** "We select culture, not scale."
  2.  **Build:** "We co-create ventures with long-term relevance."
  3.  **Compound:** "Value grows through alignment, not exposure."

---

## Implementation Technical Notes
- **Semantic HTML:** Use `<section>` tags for each major block.
- **Styling:** unique classes for the yellow background sections (e.g., `.bg-accent-yellow`).
- **Responsive Design:** Ensure padding maps correctly on mobile vs. desktop, though the layout appears intrinsically mobile-friendly due to its single-column nature.
