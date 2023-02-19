/* try{
    // predicted error code blocks (predicted error block)
} catch(error){
// console.log(error) (execute if get error)
} finally {
    // final code block (always execute)
} */

try{
    console.log(hi)
} catch(error){
console.log(error)
} finally {
    console.log(100)
}

// normally js can stop execute code when find error
// try..catch find the error, show error without stop execute code