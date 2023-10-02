const {readFile, writeFile} = require('fs')

console.log('start');

readFile('./content/text.txt','utf-8', (err,result) => {
    if(err){
        console.log('Error');
        return
    }
    const first = result;


    readFile('./content/subfolder/test.txt','utf-8', (err,result) => {
        if(err){
            console.log('Error');
            return
        }
        const second = result;

        writeFile('./content/resut-async.txt',
                  `Here is the result ${first} ${second}`,
                   {flag:'a'},
                   (err,result) => {
                    if(err){
                        console.log('Error');
                        return 
                    }
                    console.log('done');
                   })
        
    })


})

console.log('starting');