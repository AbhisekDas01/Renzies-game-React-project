# Tenzies Game

Tenzies is a simple dice game built with React and Vite. The goal of the game is to roll the dice until all of them show the same value. Players can "hold" dice to keep their values between rolls.

## Features

- **React**: Built with React for a dynamic and interactive UI.
- **Vite**: Fast development environment with hot module replacement (HMR).
- **Accessibility**: Includes ARIA attributes for better screen reader support.
- **Confetti Celebration**: Displays confetti when the game is won.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## How to Play

1. Roll the dice by clicking the "Roll" button.
2. Click on individual dice to "hold" their values.
3. Keep rolling until all dice show the same value.
4. Celebrate your win with confetti!

## Project Structure
```
Tenzies
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.jsx
│   ├── assets
│   │   ├── dice-logo.png
│   │   ├── outline_dice.svg
│   │   ├── outline_style_dice.jpg
│   │   └── react.svg
│   ├── components
│   │   ├── Die.jsx
│   │   ├── GameWon.jsx
│   │   └── Header.jsx
│   ├── index.css
│   └── index.jsx
└── vite.config.js
```