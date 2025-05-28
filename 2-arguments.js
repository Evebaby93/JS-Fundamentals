// console.log(process.argv[2])

if (!process.argv[2]) {
console.log("No argument")
} else if (process.argv[2] && process.argv[3]) {
    console.log("Arguments found")
} else {
    console.log("Argument found")
}


