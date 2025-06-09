let val = parseInt(process.argv[2])
const sq = val
if(isNaN(val))
    console.log("Missing size")
while (val && val > 0) {
    const txt = "X"
    console.log(txt.repeat(sq))
    val--
}
