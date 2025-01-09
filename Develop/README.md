# Candidate Search Application

The **Candidate Search Application** is a professional web platform that allows employers to search for and evaluate potential candidates. It integrates seamlessly with the GitHub API to fetch and display candidate information, offering a clean and responsive user experience.

---

## Table of Contents
- [Description](#description)
- [Features](#features)
- [APIs Used](#apis-used)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [React + TypeScript + Vite](#react--typescript--vite)
- [Contributing](#contributing)
- [License](#license)

---

## Description

The **Candidate Search Application** is a single-page application that leverages the GitHub API to provide users with access to publicly available candidate information. Employers can review candidates, save potential hires to a list, or skip those who do not match their needs. The app ensures data persistence through local storage, allowing users to revisit their saved candidates.

---

## Features

- **GitHub API Integration**: Fetches real-time candidate data from GitHub.
- **Candidate Browsing**: Displays candidate details including name, username, avatar, location, email, and company.
- **Save or Skip Candidates**: Simple buttons to save potential candidates or skip them.
- **Saved Candidates List**: View a curated list of saved candidates at any time.
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## APIs Used

### GitHub API
The GitHub API is used to fetch public user data, including usernames, avatars, locations, and more. This data powers the app’s candidate browsing and evaluation functionality.

- **Endpoint Example**: `https://api.github.com/users?since={random_start_id}`
- **Authorization**: Requires a fine-grained personal access token with minimal permissions.
- **Documentation**: [GitHub API Documentation](https://docs.github.com/en/rest)

---

## Installation

1. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/your-username/CandidateSearch.git


2. **Navigate** to the project directory:
   ```bash
   cd CandidateSearch


3. **Install** the necessary dependencies:
   ```bash
   npm install
   ```

4. Set up **envioremntal variables** by creating a .env file in the **enviormental directory**:

.env **Example**:
   ```bash
   VITE_GITHUB_TOKEN=your_fine_grained_token
   ```

5. **Start the development server**:
  ```bash
   npm run dev
   ```

---

## Usage

	1.	Open the application in your browser after starting the development server.

	2.	Review the candidate’s profile, including:
	•	Name, username, location, avatar, email, company, and GitHub profile link.

	3.	Use the following buttons:
	•	Save Candidate: Adds the candidate to your saved list.
	•	Skip Candidate: Skips to the next candidate.

	4.	Navigate to the Saved Candidates page to review your curated list of potential hires.

---

## Technologies Used

Technologies Used

Core Technologies:
	• **React**.js: For building the front-end user interface.
	• **TypeScript**: Ensures type safety throughout the application.
	• **Vite**: A fast build tool for modern web projects.
	• **React Router**: For seamless navigation between pages.

Dependencies:
	•	**react-router-dom**: ^6.28.0

DevDependencies:
	•	**@types/react**: ^18.2.0
	•	**@types/react-dom**: ^18.2.0
	•	**typescript**: ^5.2.2

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md), which uses [Babel](https://babeljs.io/) for Fast Refresh
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc), which uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you're developing a production application, we recommend updating the configuration to enable type-aware lint rules:

* Configure the top-level `parserOptions` property as follows:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

* Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.
* Optionally, add `plugin:@typescript-eslint/stylistic-type-checked`.
* Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` and `plugin:react/jsx-runtime` to the `extends` list.

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

  1.	Fork the repository.

  2.	Create a new branch for your feature or bug fix:
  ```bash
   git checkout -b feature-name
   ```

  3.	Make your changes and commit them:
  ```bash
  git commit -m 'Add feature or fix bug'
  ```

  4. Push to the branch:
   ```bash
  git push origin feature-name
  ```

  5. Open a pull request to the main branch.

---

## License

This project is licensed under the MIT License.
