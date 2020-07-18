
// Problem No 1 => feetToMile

function feetToMile(feet){
    if(feet < 0){
        return "invalid value. Yor valu should no be negative";
    }
    var mile = feet / 5280;     //N.b:- 5280 feet = 1 mile.
    return mile;
}



// Problem No 2 => woodCalculator

function woodCalculator(chair, table, bed){
    if(chair < 0 || table < 0 || bed < 0){
        return "You are wrong. Pease write correct data";
    }
    var woodNeed = (chair * 1) + (table * 3) + (bed * 5);  //N.b:- 1 chair woodNeed = 1 qubic wood, 1 table woodNeed = 3 qubic wood, 1 bed woodNeed = 5 qubic wood
    return woodNeed;
}


// Problem No 3 => brickNeedCalculator 

function brickCalculator(floorNo){
    if(floorNo <=0){
        return "You are wrong. Pease write correct data";
    }
    else if(floorNo <=10){
        brickNeed = 10*15*1000; //N.b:- 1-10th every floor height 15 fet
    }
    else if(floorNo <=20){
        brickNeed = 10*15*1000 + (floorNo - 10)*12*1000; //N.b:- 11-20th every floor height 12 fet
    }
    else{
        brickNeed = 10*15*1000 + 10*12*1000 + (floorNo -20)*10*1000; //N.b:- 20th to up every floor height 10 fet
    }
    return brickNeed;
}



// Problem No 4 => tinyFriend 


var myFriends = tinyFriend ([`Amin`, `Hadi`, `Munim`, `Momo`, `Mustahid`, `Don`]);

function tinyFriend(namesOfSmall){
    if(namesOfSmall == 0){
        return "You are wrong. Pease write correct data";
    }
    var smallestFriend = namesOfSmall[0];
    for(var i = 0; i < namesOfSmall.length; i++){
        var currentNumber = namesOfSmall[i];
        if(currentNumber.length < smallestFriend.length){
            smallestFriend = currentNumber;
        }
    }
    return smallestFriend;
}
console.log(myFriends)