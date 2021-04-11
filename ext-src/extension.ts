import * as vscode from 'vscode';
import CatPanel from '../lib/CatPanel'; 

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "try-vscode-extension-webview" is now active!');

	let disposable = vscode.commands.registerCommand('try-vscode-extension-webview.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from try-vscode-extension-webview!');
	});
	context.subscriptions.push(disposable);

	// try-cat.show
	context.subscriptions.push(
		vscode.commands.registerCommand('try-vscode-extension-webview.show', () => {
			CatPanel.show(context.extensionUri);
		})
	);
}

// this method is called when your extension is deactivated
export function deactivate() {}
