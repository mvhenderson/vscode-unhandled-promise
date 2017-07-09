'use strict';
function sayHello() {
    doSomethingAsync('hello')
    .then(  res => console.log('Success!') )
    .catch( err => console.error('Failed!', err) )
}
function doSomethingAsync(value:string): Promise<string> {
    return new Promise <string> ( (resolve, reject) => {
        setTimeout(function() {
            reject(new Error('Rejected!'))    
        }, 250);
    });
}
sayHello()
