let firstName = "John"
let lastName = "Snow"


function fullName(firstName,lastName){
    return firstName + ' ' + lastName;
} 

let result = fullName(firstName,lastName)
let expected = "JohnSnow" 
try {
    if(result!==expected){
        throw new Error(`${result} is not equal to ${expected}`)
    }    
} catch (error) {
    alert(error)
}


let expectedTwo = "Joh  Snow"
try {
    if(result!==expectedTwo){
        throw new Error(`${result} is not equal to ${expectedTwo}`)
    }
        
} catch (error) {
    alert(error)    
}

//The result of the second test is not seen because the first test has failed. But if we use try catch we are able to see the second test result.



function totalAmount(amount=0,taxRate=0){
    return amount + (amount * taxRate);
}

let taxResult = totalAmount(100)
let taxExpected = 200;


try {
    if(taxResult!==taxExpected){
        throw new Error(`${taxResult} is not equal to ${taxExpected}`)
    }    
} catch (error) {
    alert(error)
}

let taxResultTwo = totalAmount()
let taxExpectedTwo = 0;

if(taxResultTwo!==taxExpectedTwo){
    throw new Error(`${taxResultTwo} is not equal to ${taxExpectedTwo}`)
}else{
    console.log(`TaxResult:${taxResultTwo} is not equal to Expected Tax Result:${taxExpectedTwo}`)
}

//The result of the second test is not seen because the first test has failed. But if we use try catch we are able to see the second test result.
