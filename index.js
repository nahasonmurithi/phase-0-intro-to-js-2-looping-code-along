function writeCards(names){
    for (let i = 0 ; i < names.length; i++){
        let message =`Thank you, ${names[i]}, for the wonderful surprise gifts!`;
    }
    return writeCards;
}

function countDown(){
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--);
    }
};