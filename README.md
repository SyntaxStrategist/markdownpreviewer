# Markdown Previewer

This is a Markdown Previewer built with React. It allows users to write and preview Markdown content in real-time, following GitHub Flavored Markdown (GFM) syntax. This project is a part of the learning exercises to enhance understanding of React, front-end frameworks, and GitHub Pages deployment.

## Live Demo
You can view the live version of this project here:
[Markdown Previewer](https://Syntaxstrategist.github.io/markdownpreviewer)

## Features
- Real-time Markdown preview.
- Support for GitHub Flavored Markdown.
- Syntax highlighting for code blocks.
- Responsive design with a clean, blue-themed UI.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Marked**: A library to parse Markdown and convert it to HTML.
- **gh-pages**: Used to deploy the project to GitHub Pages.
- **CSS**: Custom styling for the previewer.

## Installation and Setup
To run this project locally, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/Syntaxstrategist/markdownpreviewer.git
   ```

2. **Navigate to the project directory**:
   ```sh
   cd markdownpreviewer
   ```

3. **Install dependencies**:
   ```sh
   npm install
   ```

4. **Run the app locally**:
   ```sh
   npm start
   ```
   The app will be running at `http://localhost:3000`.

## Deploying to GitHub Pages
This project is deployed using GitHub Pages. To deploy any updates:

1. **Build the project**:
   ```sh
   npm run build
   ```

2. **Deploy**:
   ```sh
   npm run deploy
   ```

This will publish the latest version to the GitHub Pages URL.

## Usage
- **Editor**: Write Markdown in the left-hand editor.
- **Preview**: See the real-time HTML rendering of your Markdown on the right.

## Example Markdown Syntax
Here are some examples of Markdown you can try:
- **Bold Text**: `**This is bold**`
- **Italic Text**: `*This is italic*`
- **Code Block**:
  ```
  ```javascript
  function greet() {
    console.log("Hello, World!");
  }
  ```
  ```
- **Blockquote**: `> This is a blockquote.`
- **Links**: `[OpenAI](https://openai.com)`

## Contributing
Contributions are welcome! Feel free to fork this repository, make changes, and submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.



