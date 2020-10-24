const TestRunner = require("jest-runner");

let testcase;
let value;
let result = [];

function moreless(){
    if (value == 8) return 'hooray!!';
    else if (value < 8) return 'Less, ' +(8-value);
    else if (value > 8) return 'More, ' +(value-8);
};

function output(){
    testcase = (Math.floor(Math.random() * 3)+1);
    console.log('Testcase:', testcase);

    for (testcase; testcase >= 1 && testcase <= 3; testcase--){
        value = (Math.floor(Math.random() * 15)+1);
        console.log("Input:", value);
        moreless();
        console.log("Output:", moreless())
    };
    return "Finish";
};



let outputconsole = console.log(output());


describe('NiceDay QA Programming Testcase', ()=>{
    test('Problem A - The numbers of Eight', ()=>{
        expect(outputconsole);
    });
});
