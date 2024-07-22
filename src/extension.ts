import * as vscode from 'vscode';
import { exec } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {

  // Create an output channel
  const outputChannel = vscode.window.createOutputChannel('SAIS Runner');

  let disposable = vscode.commands.registerCommand('extension.runSaisProgram', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const document = editor.document;
      const filePath = document.fileName;
      outputChannel.appendLine(`Running SAIS Program at: ${filePath}`);

      // Get the interpreter path from the configuration
      const config = vscode.workspace.getConfiguration('saisRunner');
      const binaryPath = config.get<string>('interpreterPath');

      // Check if the binary path is set
      if (!binaryPath) {
        outputChannel.appendLine(`Error: SAIS interpreter path is not set. Please configure it in the settings.\n`);
        outputChannel.show(true);  // Show the output channel
        return;
      }
      
      // Check if the binary exists
      if (!fs.existsSync(binaryPath)) {
        outputChannel.appendLine(`Error: The binary path ${binaryPath} does not exist.\n`);
        outputChannel.show(true);  // Show the output channel
        return;
      }

      // Execute the binary with the file path
      exec(`${binaryPath} ${filePath}`, (error, stdout, stderr) => {
        if (error) {
          outputChannel.appendLine(`${stderr}\n`);
          outputChannel.show(true);  // Show the output channel
          return;
        }

		if (`${stdout}` !== "") {
        	outputChannel.appendLine(`${stdout}\n`);
		}else {
			outputChannel.appendLine(`Program ran successfully.\n`);
		}
        outputChannel.show(true);  // Show the output channel
      });
    } else {
      outputChannel.appendLine('No active editor found.\n');
      outputChannel.show(true);  // Show the output channel
    }
  });

  context.subscriptions.push(disposable);
}