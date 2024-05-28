let linkedInURLPattern = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}\/?$/

function checkValidURL(input){
   return linkedInURLPattern.test(input)
}

let sample = "https://www.linkedin.com/in/anupam-datta-a97b90248/"

if(checkValidURL(sample)){
    console.log(`"${sample}" is a valid LinkedIn profile URL.`);
}else{
    console.log(`"${sample}" is not a valid LinkedIn profile URL.`);
}
