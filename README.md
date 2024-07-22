# SAIS Runner

An extension to run SAIS (Safe AI Script) files directly from VS Code.

## Features

- Execute SAIS scripts with a single click or command.
- Configurable path to the SAIS interpreter.
- Output results directly in the VS Code Output panel.

## Requirements

1. This extension requires SAIS Sintax Highlight to be installed. You can find it [here](https://marketplace.visualstudio.com/items?itemName=LajaraAI.sais-syntax-highlight).
2. Ensure that the SAIS interpreter executable is available on your system.

## Extension Settings

This extension contributes the following settings:

* `saisRunner.interpreterPath`: Specifies the path to the SAIS interpreter executable.

## Usage

1. **Set Up Interpreter Path**:
   - Open VS Code.
   - Go to `Preferences` > `Settings`.
   - Search for `SAIS Runner Interpreter Path`.
   - Set the path to your SAIS interpreter executable.

2. **Run SAIS Script**:
   - Open a SAIS file (`.sais` extension) in VS Code.
   - Click the green play button at the top right corner of the editor, or run the `Run SAIS Program` command from the Command Palette (`Ctrl+Shift+P`).

## Commands

- `Run SAIS Program`: Executes the currently open SAIS file using the configured interpreter.

## Development

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Press `F5` to open a new VS Code window with the extension loaded.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT License
