const str = "Mr Bright"
// console.log(str.length)
// const charlist = str.split("")
let revStr = ""
for (let len =str.length-1; len>=0; len--) {
    console.log(len)
    revStr =`${revStr}${str[len]}`
    console.log(revStr)
}
console.log(revStr)
    