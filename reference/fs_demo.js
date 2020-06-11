const fs = require('fs');
const path = require('path');

// //create folder
// fs.mkdir(path.join(__dirname, 'test'),{}, (err) => {
//     if(err) console.log(err);
//     console.log('directory created...')
// })

// //create and write file
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'),'this is test from fs module.', (err) => {
//     if(err) console.log(err);
//     console.log('File created...')
// })

// //append file
// fs.appendFile(path.join(__dirname, 'test', 'hello.txt'),', appending text', (err) => {
//     if(err) console.log(err);
//     console.log('Appended created...')
// })

// //read file
// fs.readFile(path.join(__dirname, 'test', 'helloworld.txt'),'utf8', (err, data) => {
//     if(err) console.log(err);
//     console.log(data)
// })

// fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'helloworld.txt'), (err) => {
//     if (err) console.log(err);
//     console.log('file renamed')
// })

fs.rmdir('test', (err) => {
    if(err) console.log(err);
    console.log('File removed')
})