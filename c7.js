const {readFileSync, writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/text.txt','utf-8');
const second = readFileSync('./content/subfolder/test.txt','utf-8');

console.log(first,second)

writeFileSync('./content/result-sync.txt',
             `Here is the result file ${first}, ${second}`,
             {flag:'a'})

console.log('done');
console.log('starting the next');