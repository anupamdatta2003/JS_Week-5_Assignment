let input = "Anupam Datta"

function reverseString(str){
    return str.split("").reverse().join("")
}

function delayReverse(str){
    setTimeout(function(){
        let reverse = reverseString(str)
        console.log(reverse);
    },2000)
}

delayReverse(input)