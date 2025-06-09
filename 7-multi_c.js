let val = parseInt(process.argv[2])
if(isNaN(val))
    console.log("Missing number of occurrences")
while (val && val > 0) {
    console.log("C is fun")
    val--
}
