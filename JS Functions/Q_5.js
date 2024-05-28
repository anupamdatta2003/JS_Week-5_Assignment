let urlPattern = /^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$/

function checkValidURL(input){
    return urlPattern.test(input)
}

let sample = "https://pwskills.com"

if(checkValidURL(sample)){
    console.log(`"${sample}" is a valid URL.`);
}else{
    console.log(`"${sample}" is not a valid URL.`);
}

