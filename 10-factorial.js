function factorial(num) {
    if(isNaN(num) || num === 1)
    return 1
    return num * factorial(num - 1)
}
const num = parseInt(process.argv[2])
console.log(factorial(num))
