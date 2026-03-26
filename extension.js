const vscode = require('vscode');

function activate(context) {

    const provider = vscode.languages.registerCompletionItemProvider(
        ['cpp', 'c', 'python', 'java', 'javascript', 'typescript'],
        {
            provideCompletionItems(document, position) {

                const linePrefix = document.lineAt(position).text.substr(0, position.character);

                if (!linePrefix.endsWith('!')) {
                    return undefined;
                }

                const items = [];

                // C++
                const cpp = new vscode.CompletionItem('cpp');
                cpp.insertText = new vscode.SnippetString(
`#include <iostream>
using namespace std;

int main() {

    return 0;
}`);
                cpp.detail = "C++ Boilerplate";
                items.push(cpp);

                // Python
                const py = new vscode.CompletionItem('py');
                py.insertText = new vscode.SnippetString(
`def main():
    

if __name__ == "__main__":
    main()`);
                py.detail = "Python Boilerplate";
                items.push(py);

                // Java
                const java = new vscode.CompletionItem('java');
                java.insertText = new vscode.SnippetString(
`public class Main {
    public static void main(String[] args) {
        
    }
}`);
                java.detail = "Java Boilerplate";
                items.push(java);

                // JS
                const js = new vscode.CompletionItem('js');
                js.insertText = new vscode.SnippetString(
`function main() {
    
}

main();`);
                js.detail = "JavaScript Boilerplate";
                items.push(js);

                // TS
                const ts = new vscode.CompletionItem('ts');
                ts.insertText = new vscode.SnippetString(
`function main(): void {
    
}

main();`);
                ts.detail = "TypeScript Boilerplate";
                items.push(ts);

                // C
                const c = new vscode.CompletionItem('c');
                c.insertText = new vscode.SnippetString(
`#include <stdio.h>

int main() {

    return 0;
}`);
                c.detail = "C Boilerplate";
                items.push(c);

                return items;
            }
        },
        '!' // trigger
    );

    context.subscriptions.push(provider);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};