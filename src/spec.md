# Specification

## Summary
**Goal:** Make the Valentine prompt use exact “Yes”/“No” labels, bias interactions toward “Yes” by resizing buttons on “No” interactions (including iPad tap), and personalize the success message text for Naina exactly as provided.

**Planned changes:**
- Update the prompt screen action button labels to exactly “Yes” and “No”.
- Change the “No” interaction so that on desktop hover/pointer enter, “No” smoothly shrinks while “Yes” smoothly grows; on iPad (no hover), trigger the same effect on pointer down/tap on “No”.
- Preserve the existing behavior where after the third “No” interaction, the “No” option is removed/hidden and cannot be clicked.
- Update the success screen text to exactly match the provided heading and message for Naina, preserving punctuation, capitalization, emojis, and line breaks.

**User-visible outcome:** On the prompt screen, users see only “Yes” and “No”; attempting to interact with “No” makes it harder to click (and eventually removes it after repeated interactions), and choosing “Yes” shows the exact personalized success message for Naina.
