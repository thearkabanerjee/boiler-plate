# Boilerplate VS Code Extension

A lightweight Visual Studio Code extension that quickly generates boilerplate code for different programming languages using simple trigger commands.

## Overview

This extension is designed to speed up development by eliminating the need to manually write repetitive starter code. By typing a short trigger (such as `!cpp`) inside a supported file, the extension inserts a ready-to-use boilerplate template.

## Features

* Instant boilerplate generation for multiple languages
* Simple trigger-based system (e.g., `!cpp`, `!js`, `!py`)
* Reduces setup time for new files
* Clean and minimal implementation for easy customization

## How It Works

1. Open a file in VS Code (for example, a `.cpp` file).
2. Type a trigger command such as:

   ```
   !cpp
   ```
3. The extension replaces the trigger with the corresponding boilerplate code.

## Supported Languages

* C++
* C
* JavaScript
* Python
* TypeScript

More languages can be added by extending the configuration.

## Installation

### From Source

1. Clone the repository:

   ```
   git clone https://github.com/your-username/boilerplate-extension.git
   ```
2. Navigate into the project:

   ```
   cd boilerplate-extension
   ```
3. Install dependencies:

   ```
   npm install
   ```
4. Launch the extension:

   * Press `F5` in VS Code to open a new Extension Development Host window

## Usage

* Open any supported file type
* Type the corresponding trigger
* Press Enter or trigger completion
* Boilerplate will be inserted automatically

## Project Structure

```
.
├── extension.js        # Main extension logic
├── package.json        # Extension configuration and metadata
├── test/               # Test files
├── .vscode/            # Debug configuration
├── .gitignore
├── README.md
```

## Customization

To add or modify boilerplates:

1. Open `extension.js`
2. Add a new trigger and template mapping
3. Reload the extension

## Development

To make changes:

1. Modify the source files
2. Press `F5` to run the extension
3. Test changes in the new VS Code window

## Future Improvements

* Support for more languages
* User-defined custom templates
* Settings-based configuration
* Snippet expansion with cursor positioning

## Contributing

Contributions are welcome. You can:

* Open issues for bugs or feature requests
* Submit pull requests with improvements

## License

This project is licensed under the MIT License.
