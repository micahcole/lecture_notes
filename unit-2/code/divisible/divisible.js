function divisible(dividend, divisor) {
    let remainder = dividend % divisor;
    console.log(remainder);
    if(remainder == 0){
        return true;
    } else {
        return false;
    }
}

divisible(6, 2);
divisible(7, 2);
divisible(93, 28);
divisible(6000, 17);