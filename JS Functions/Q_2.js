function randomNumber(){
    return Math.floor(Math.random()*100)
}

function numberDelay(delaySeconds){
    console.log(`Generating a random number after a delay of ${delaySeconds} seconds...`);
    let countdown = delaySeconds
    const countdownInterval = setInterval(()=>{
        console.log(`${countdown} seconds remaining...`);
        countdown--

        if(countdown===0){
            clearInterval(countdownInterval)
            const rNumber = randomNumber()
            console.log(`Random number generated : ${rNumber}`);
        }
    },1000)
}

numberDelay(5)
