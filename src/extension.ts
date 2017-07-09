'use strict';
import {commands,window,ExtensionContext} from 'vscode';

export function activate(context: ExtensionContext) {
    let cmd = commands.registerCommand('extension.sayHello', sayHello)
	context.subscriptions.push(cmd);
}
function sayHello() {
    doSomethingAsync('hello')
    .then(  res => window.showInformationMessage('Success!') )
    .catch( err => window.showErrorMessage(err) )
}
function doSomethingAsync(value:string): Promise<string> {
    return new Promise <string> ( (resolve, reject) => {
        setTimeout(function() {
            reject(new Error('Rejected!'))            
        }, 250);
    });
}
