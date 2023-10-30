# Rolling dice game

1. dice display : The application displays the dice and their current value.
2. Rolling dice: Users can roll the dice to obtain a new value.
value.
3. Calculate score: The game automatically calculates the player's score based on the
dice values.
4. Turn management: The game allows you to manage players' turns, alternating between
players after each throw.
5. Winner display: The game displays the winning player with the highest score.
6. Reset game: Users can reset the game to start a new game.
a new game.

## Stack
React + TypeScript + Vite + Tailwind 

Why I choose vite over CRA ?
- faster spin-up of dev server
- less waiting time for file updates
- improve build performance

## Setup

- step 1: install package
- step 2: ```npm run dev``` or ```bun dev``` or ```yarn dev``` to launch locally


## 📑 Improvement:

- Make rolling asynchronous ***
- Type improvement (with zod) and complete missing
- Using specific algorithm for dice rolling, actually the first player have more chance to gain
- shuffle player to trough first
- Add posibilities to play against the computer (using algorithm like minmax, alpha beta, ...)
- Improve Dice UI
- Improve UI & UX
- setup linter