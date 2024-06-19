# Tenzies Game App

Tenzies is a simple dice game where the objective is to roll all dice to the same number as quickly as possible.

## Features

- Built using React, a popular JavaScript library for building user interfaces.
- Utilizes the `react-confetti` library to add a celebratory confetti effect when the game is won.
- Uses the `fontawesome` library to display the dice faces.
- Stores the user's best score (smallest number of rolls) in the browser's local storage.

## Getting Started

To run the Tenzies game app locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/Juin28/Tenzies_Game_App.git
```

2. Navigate to the project directory:
```
cd Tenzies_Game_App
```

3. Install the dependencies:
```
npm install
```

4. Start the development server:
```
npm start
```

This Tenzies Game App will then be available at your local host

## Usage

1. The game starts with 10 dice, each displaying a random number from 1 to 6.
2. Click on a die to "hold" it, keeping its current value.
3. Roll the remaining dice until all 10 dice display the same number.
4. When all dice display the same number, the game is won, and a confetti effect is displayed.
5. The number of rolls it took to win the game is stored in the browser's local storage as the "best score".
6. The best score is displayed on the screen, and the user can try to beat their previous best score.

## Dependencies

- React
- react-confetti
- fontawesome

## Contributing

If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.