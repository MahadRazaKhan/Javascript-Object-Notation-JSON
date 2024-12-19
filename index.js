const bioData = {
    name : "Mahad",
    age : 20,
    education : "BSCS",
};
// console.log(bioData.name);
// console.log(bioData.education);
// console.log(bioData.age);

const jsonData = JSON.stringify(bioData);
console.log(jsonData);

const objData = JSON.parse(jsonData);
console.log(objData);
// console.log(objData.age);


// ---Object to JSON then JSON to object again using FS Module
// const bioData = {
//     name : "Mahad",
//     age : 20,
//     education : "BSCS",
// };

// const jsonData = JSON.stringify(bioData);
// fs = require('fs');
// fs.writeFile('jsonFile.json', jsonData ,(err)=>{
//     console.log('Done');
// });

// fs.readFile('jsonFile.json',"UTF-8",(err,data)=>{
//     const orgData = JSON.parse(data);
//     console.log(orgData);
//     console.log(data);

// })
