// const myNumber = 7
// const myStrNumber = "7"
// const myBoolean = true

// console.log(myNumber == myStrNumber)
// console.log(myNumber === myStrNumber)


// if (myNumber === myStrNumber) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// task1
function calculate(a, b) {
    if (typeof a === "string") {
        return false
    }
    if (typeof b === "string") {
        return false
    }
    return a + b
}

console.log(calculate("7", 9))
console.log(calculate(7, "9"))
console.log(calculate(7, 9))




// task2
function toCelsius(f) {
    if (typeof f === "number") {
        let c = (5 / 9) * (f - 32);
        return c
    }
    else {
        return false
    }
}
let result2 = toCelsius(70)
console.log(result2)


// task3
function calculation(a, b, operation) {
    if (operation != "+" && operation != "-" && operation != "*" && operation != "/") {
        return false
    }
    let res = null;

    if (typeof a == "number" && typeof b == "number") {
        if (operation == "+") {
            res = a + b
        }

        if (operation == "-") {
            res = a - b
        }

        if (operation == "*") {
            res = a * b
        }

        if (operation == "/") {
            res = a / b
        }
        return res
    }
    else {
        return false

    }
}

let result3 = calculation(16, 4, "+")
console.log(result3)
