const TestRunner = require("jest-runner");

var arr = [];
for (var i = 1, size = Math.floor(Math.random()*100)+1; i <= size; i++) {
    arr.push(Math.floor(Math.random() * 9)+1)
}    
console.log("Input:",'\n', arr);

let removeDuplicate =  Array.from(new Set(arr));

describe('NiceDay QA Programming Test', ()=>{
    test('Problem B - Remove Duplicate', ()=>{
        expect(removeDuplicate);
        console.log("Output:",'\n', removeDuplicate);
    });
});