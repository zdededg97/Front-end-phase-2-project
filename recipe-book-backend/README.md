# Recipe Book Backend

Recipe Book Backend provides the necessary endpoints to support the Recipe Book Frontend application. It simulates a backend server using `json-server`.

## Installation

To set up the backend application, follow these steps:

1. Clone the repository:

git clone https://github.com/zdededg97/Front-end-phase-2-project

cd recipe-book-backend

npm install

## Usage

To run the JSON server:

npm start

The server will be running on http://localhost:3000. You can send GET and POST requests to /recipes to fetch or add recipes, respectively.

Example to fetch recipes:

curl http://localhost:3000/recipes

## API Endpoints

GET /recipes: Fetches a list of all recipes.

POST /recipes: Adds a new recipe. Requires title, image, and externalLink in the request body.

## Contributing

Pull requests are welcome. For significant changes, please open an issue first to discuss your proposed changes. Ensure that changes adhere to the current conventions and practices.

## License

This project is licensed under the GNU General Public License v3.0.
