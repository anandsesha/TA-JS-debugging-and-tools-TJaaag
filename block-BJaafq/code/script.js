function test(message, cb){
    try {
        cb();
        console.log('✅',message)
    } catch (error) {
        console.error(error)
        console.log('❌',message)
    }
}


function expect(actual){
    return {
        toEqual: function(expected){
            if(actual!==expected){
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        },
        toTypeEqual: function(){
            if(typeof actual!== expected){
                throw new Error(`${typeof actual} is not equal to ${expected}`)
            }
        }
    };
    
}

//Add two numbers

function sum(numA=0,numB=0){
    return numA + numB;
}

function testSum(){
    let result = sum(2,4)
    let expected = 5

    expect(result).toTypeEqual(expected)
}

// 5 test cases for sum
test("add 2 and 4",testSum)
test("add 10 and 6 is a number",()=>{
    expect(sum(10,6)).toTypeEqual('string')
})
test("add 10 and 6 is a number",()=>{
    expect(sum(10,6)).toTypeEqual('number')
})
test("add 10 and 6",()=> {
    expect(sum(10,6)).toEqual(16)
})
test("add 100 and 200",()=> {
    expect(sum(100,200)).toEqual(true)
})
test("add 100 and empty",()=> {
    expect(sum(100)).toEqual(100)
})


//Multiply two numbers

function multiply(numA=1,numB=1){
    return numA * numB;
}

function testMultiply(){
    result = multiply(2,4)
    expected = "number";

    expect(result).toTypeEqual(expected)
}

test("type of 2 and 4",testMultiply)
test("multiply 2 and 4",() => {
    expect(multiply(2,4)).toTypeEqual("string")
})
test("multiply 78 and 40",() => {
    expect(multiply(78,40)).toTypeEqual("number")
})
test("multiply 78 and 40",() => {
    expect(multiply(78,40)).toTypeEqual(true)
})
test("multiply 78 and 4",() => {
    expect(multiply(78,4)).toEqual(7228)
})
test("multiply 78 and empty",() => {
    expect(multiply(78)).toEqual(78)
})