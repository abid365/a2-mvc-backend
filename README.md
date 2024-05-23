# E-commerce Server

This is my first Node.js Express project for an e-commerce server. The server is built using TypeScript and follows a structured approach for development and production environments. Below are the available commands and their functionalities.

## Getting Started

To get started with the project, follow these instructions.

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)
- TypeScript (v4.x or later)
- ts-node-dev
- eslint
- prettier

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/e-commerce-server.git
    cd e-commerce-server
    ```

2. Install the dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

### Available Scripts

In the project directory, you can run the following scripts:

#### Start the Server

- **Production**:
    ```sh
    npm run start:prod
    # or
    yarn start:prod
    ```

    This will compile the TypeScript files and start the server using the compiled JavaScript files located in the `dist` directory.

- **Development**:
    ```sh
    npm run start:dev
    # or
    yarn start:dev
    ```

    This will start the server in development mode using `ts-node-dev` for real-time TypeScript compilation and automatic server restarts.

#### Build the Project

```sh
npm run build
# or
yarn build
```

This will compile the TypeScript files into JavaScript and output them to the `dist` directory.

#### Lint the Code

```sh
npm run lint
# or
yarn lint
```

This will run ESLint on the `src` directory, using the configurations specified in the `.eslintrc` file and ignoring files listed in `.eslintignore`.

#### Fix Linting Errors

```sh
npm run lint:fix
# or
yarn lint:fix
```

This will run ESLint with the `--fix` flag, attempting to automatically fix any linting errors in the codebase.

#### Format the Code

```sh
npm run prettier
# or
yarn prettier
```

This will format the code in the `src` directory using Prettier, according to the rules specified in the Prettier configuration file.

#### Fix Formatting Issues

```sh
npm run prettier:fix
# or
yarn prettier:fix
```

This will run Prettier with the `--write` flag, attempting to automatically fix any formatting issues in the codebase.

## Project Structure

The project follows a typical structure for a Node.js application with TypeScript:

```
e-commerce-server/
├── dist/              # Compiled JavaScript files
├── src/               # Source TypeScript files
│   ├── controllers/   # Controller files
│   ├── models/        # Model files
│   ├── routes/        # Route files
│   ├── services/      # Service files
│   ├── utils/         # Utility files
│   ├── server.ts      # Entry point of the application
├── .eslintignore      # ESLint ignore file
├── .eslintrc          # ESLint configuration file
├── .gitignore         # Git ignore file
├── .prettierrc        # Prettier configuration file
├── package.json       # NPM package configuration file
├── tsconfig.json      # TypeScript configuration file
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

