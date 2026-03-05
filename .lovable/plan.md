

# Redesign BonusSection with Image Cards

## What
Replace the current dark text-only bonus cards with the three uploaded images (each is a complete card with photo background + glass overlay text). The layout follows the reference slide: header + subtitle on the left, description text on the right, and the 3 image cards in a row below.

## How

### 1. Copy the 3 card images to `src/assets/`
- `Group_1171275827.png` → `src/assets/bonus-caneta.png`
- `Group_1171275828.png` → `src/assets/bonus-treinamento.png`
- `Group_1171275829.png` → `src/assets/bonus-eventos.png`

### 2. Rewrite `BonusSection.tsx`
- Remove the `bonuses` data array and the programmatic card rendering
- Import the 3 images as ES6 modules
- Layout: top area uses a 2-column grid (title left, description right) matching the reference slide
- Bottom area: 3-column grid of `<img>` tags displaying the card images with rounded corners and subtle shadow
- Each image already contains all the text overlay, so no text rendering needed on top
- Keep the section background (`hsl(42 33% 92%)`) and noise texture
- On mobile: stack cards vertically, header/description stack naturally

