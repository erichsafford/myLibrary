// FIBONACCI INTERATION

let fib = [0, 1]
function fibs(num) {
    if (num === 1 || num === 2) {return}
    else {
        for (let i = 1; i <= num; i++) {
            const newFib = fib[i] + fib[i-1]
            fib.push(newFib)
        }
    }
}

const target = 15
const targetFib = fibs(target - 2)

console.log(fib)

//FIBONACCI RECURSIVE

function fibRecursive(num) {
    if (num < 2) {return num}
    else {
        return fibRecursive(num-1) + fibRecursive(num-2)
    }
}

const recursiveFibList = []
const fibRecursiveTarget = 15
for (let i = 0; i < fibRecursiveTarget; i++) {
    recursiveFibList.push(fibRecursive(i))
}

console.log(recursiveFibList)