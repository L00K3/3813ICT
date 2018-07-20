//Task 1
console.log("Hello World")

//Task 2, 3
//Created Git Repo

//Task 4
function add() {
    let tally = 0
    
    try {
        for (let arg in arguments) {
            tally += arguments[arg]
        }
    } catch(error) { /* Non-Numeric Argument */ }
    
    return tally
}

console.log(add(5, 10))