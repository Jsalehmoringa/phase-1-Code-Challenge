let speed;
function moveSpeed(speed){
if(speed < 70){
    return 'OK'

}else if(speed > 70){
   let points = ((speed - 70) / 5)
    if(points >= 12){
        return 'License suspended'

    }else{
        return 'Points:' + points
    }
 
}
}

console.log(moveSpeed(10));
