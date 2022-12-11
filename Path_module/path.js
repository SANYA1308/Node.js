//Introducing the path module

const path = require('path');

console.log(path.basename('d:/nodejs/Path_module/path.js'))

console.log(__filename);

console.log(path.basename(__filename));
console.log(path.basename(__filename , '.js'));
//tells the directory name where the file is located
console.log(path.dirname(__filename));
console.log(path.extname(__filename));

//join
console.log(path.join('searching', '/left', 'const'));

//removes one level from the given directory

console.log(path.join('searching', '/left', 'const','..'));
console.log(path.join(__dirname, 'search', '/courses'));
// to normalize the path
console.log(path.normalize('c:////ffff/////searching//left'));


//parse
console.log(path.parse(__filename));

//gives the name of the file
console.log(path.parse(__filename).base);

// to know whether the path is absolute or not

console.log(path.isAbsolute('//search'));
console.log(path.isAbsolute('//foo//cuuu'));