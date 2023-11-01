let names = ["a", "b", "c"];

function writeCards(names, msg) {
    let returnMessage = [];
    for (let i = 0; i < names.length; i++) {
        returnMessage.push(`Thank you, ${names[i]}, for the wonderful ${msg} gift!`)
        
    }
    return returnMessage;
    
}; 


function countDown(num) {
    let number = Math.abs(num);
            while (number >= 0) {
                console.log(number); number--;
        }
}


