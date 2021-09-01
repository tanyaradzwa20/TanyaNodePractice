// we have read streams and write streams (read streams read data and write streams write data)

const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding:'utf8'})
const writeStream = fs.createWriteStream('./docs/blog4.text')
// readStream.on('data', (chunk) =>{
//     console.log('----new chunk----');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write('tanyaradzwa')
// })

readStream.pipe(writeStream)