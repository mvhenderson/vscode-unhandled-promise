```
$ node --version && tsc --version && code --version
v8.1.3
Version 2.3.4
1.13.1
379d2efb5539b09112c793d3d9a413017d736f89

$ ls ~/.vscode/extensions/

$ tsc -p ./ && node out/src/reject.js
Failed! Error: Rejected!
    at Timeout._onTimeout (/Users/mike/Source/vscode/extensions/issues/vscode-unhandled-promise/out/src/reject.js:9:20)
    at ontimeout (timers.js:488:11)
    at tryOnTimeout (timers.js:323:5)
    at Timer.listOnTimeout (timers.js:283:5)
```
