// This is the start of a function definition, it has the name of "myFunction", and has two parameters to hold incoming data, "option1" and "option2".
function myFunction(option, option2) {

    //Define product by using let equal option time option2
    let product = option * option2;

    //Use console.log for display value of product.
    console.log(product);

    //Use console.log for display "The value of the option parameter is " and plus option.

    console.log("The value of the option parameter is " + option);

    //check if condition option equal 0 then return result "Everything is good". If not in this condition check another else if condition.
    if (option === 0) {
        
        // return result "Everything is good!" 
        return "Everything is good!";

    //check if condition option equal 1 then return result "An error happened!". If not in this condition check another else if condition.
    } else if (option === 1) {
        
        // return result "An error happend!"
        return "An error happened!";

    // check if condition option equal -1 then return result "Everything is bad!". 
    } else if (option === -1) {
        
        // return result " Everything is bad!" 
        return "Everything is bad!";
    } 

}

// Define result by using let equal myfunction has two number is 1 and 11
let result = myFunction(1, 11);
//  Define result2 by using let equal myfunction has two number is 2 and 200
let result2 = myFunction(2, 200);

// check if condition if the value result is equal then display "An error happened" and the value result2 is equal then display "An error happened"
if ( result === "An error happened" && result2 === "An error happened") {
    
    // Use console.log for display  "Catastrophic failure." If not in condition ( result === "An error happened" && result2 === "An error happened")
    console.log("Catastrophic failure.");

}