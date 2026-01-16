# PROJECT CHAOS: Entropy Management System

Welcome to the underground. This is the MVP for the Entropy Management System (EMS).

## Known Issues (The Gaps):
1. **Responsive Failure**: The dashboard sidebar is rigid. It eats the content on mobile devices.
2. **The Entropy Logic**: The `updateEntropy` function in `script.js` is messy. It doesn't cap at 100%, and it's using a global variable for state management like it's 1999.
3. **Hardcoded Data**: The agent list is static. We need a way to dynamically add agents of chaos.
4. **Visual Vibe**: The "UNSTABLE" status label doesn't actually change based on the entropy level.

## Setup
Open `index.html` in any modern browser. Don't let the authorities see it.