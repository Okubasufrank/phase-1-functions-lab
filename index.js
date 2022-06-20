// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    
    var block = 42-someValue;
    if(block < 0){
        block = block * (-1);
    }
    return block;
}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);
function distanceFromHqInFeet(someValue){
    var feet = distanceFromHqInBlocks(someValue)
    return feet*264;
}
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(num1, num2){
    var distance = num1 - num2;
    if (distance < 0){
         distance = distance * (-1)
    }
    return distance * 264 ;
}
    distanceFromHqInFeet(43,48);
    distanceFromHqInFeet(50,60);
    distanceFromHqInFeet(34, 28);

function calculatesFarePrice(start, destination){

    var distance = distanceTravelledInFeet(start, destination);

   if(distance <=400){
        return 0;
    }else  if(distance > 400 && distance <2000){
        return (distance - 400)* 0.02 ;
    }
    else if( distance>= 2000 && distance<2500)
    {
        return 25;
    }
    else{
        return "cannot travel that far"
    }
}

calculatesFarePrice(43,44);
calculatesFarePrice(50,58);
calculatesFarePrice(34,24);

