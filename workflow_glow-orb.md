# Glow Orb Scroll Workflow

## Goal
Adjust the 3D background so the glowing orb **does not exist at the start**. It should **begin to appear when the user reaches the “What Is 9Sences” section**, starting **very small**, then **grow continuously** as the user scrolls downward until it **fills the entire background**.

## Current Behavior (Observed)
- A bright orb is already visible in the hero view.
- The orb is oversized from the start, covering the hands early.

## Desired Behavior
1) **No orb in hero.**
2) **Trigger point:** the orb begins to appear when the “What Is 9Sences” section enters view.
3) **Initial state:** tiny glow between the fingertips (barely visible).
4) **Growth:** as the user scrolls further down, the orb scales up smoothly.
5) **End state:** the orb grows large enough to cover the full background.

## Proposed Technical Approach
- **Use scroll-based progress** tied to the “What Is 9Sences” section:
  - Map the section’s start → end to a `0 → 1` glow progress value.
  - Use `useScroll` with a `target` ref or compute a custom range from element offsets.
- **Orb placement:**
  - Place a mesh/sprite between the two hands in `components/Scene3D.tsx`.
  - Use a soft radial gradient material (shader or sprite texture).
- **Animation mapping:**
  - `opacity`: 0 → 1 as progress begins.
  - `scale`: tiny (e.g. `0.05`) → very large (e.g. `20+`, tuned to cover background).
  - Optional: subtle pulsation using time or noise for organic feel.

## Files Likely Touched
- `components/Scene3D.tsx` (orb mesh and scroll mapping)
- `components/ScrollProgressContext.tsx` (if new scroll target context is needed)
- `app/page.tsx` or `components/home/IntroSection.tsx` (add a ref anchor for scroll mapping if required)

## Acceptance Criteria
- The hero view loads with **no orb visible**.
- On reaching **“What Is 9Sences”**, a **tiny orb** appears between fingertips.
- The orb **grows smoothly** as the user scrolls downward.
- By later sections, the orb **fills the entire background** (no visible edges).
- No layout or scroll regressions.

## Notes / Open Questions
- Confirm the exact scroll range for full growth (end of intro vs. ecosystem vs. entire page).
- Confirm preferred glow color temperature (warm white vs. cool white).
