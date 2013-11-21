/**
Write some code that will evaluate a poker hand and determine its 
rank. 
Example: 
Hand: Ah As 10c 7d 6s (Pair of Aces) 
Hand: Kh Kc 3s 3h 2d (2 Pair) 
Hand: Kh Qh 6h 2h 9h (Flush)
**/

var faceRanking = {
    "A" : 14,
    "K" : 13,
    "Q" : 12,
    "J" : 11,
    "10" : 10,
    "9" : 9,
    "8" : 8,
    "7" : 7,
    "6" : 6,
    "5" : 5,
    "4" : 4,
    "3" : 3,
    "2" : 2
};

var definitions = {
    "A" : "Ace",
    "K" : "King",
    "Q" : "Queen",
    "J" : "Jack",
    "10" : "Ten",
    "9" : "Nine",
    "8" : "Eight",
    "7" : "Seven",
    "6" : "Six",
    "5" : "Five",
    "4" : "Four",
    "3" : "Three",
    "2" : "Two"
};

var rankings = {
    1 : "Pair",
    2 : "2 Pair",
    3 : "Three-of-a-kind",
    4 : "Four-of-a-kind",
    5 : "Full House (say hello to Danny Tanner!)",
    6 : "Straight",
    7 : "Flush",
    8 : "Straight Flush"
};

var pokerHandEval = (function(){

    var hand;

    var cardArr = function(str){
        hand = str;
        var arr = str.split(' ').join('').split(/[hcsd]/).slice(0,5)
            .sort(function(a, b) {
                return faceRanking[b] - faceRanking[a];
            });
        return arr;
    };
    
    var suitArr = function(str){
        hand = str;
        var arr = str.split(' ').join('').split(/[A-Z0-9]/).join('').split('');
        return arr;
    };

    //checks for matching card values and suits
    var ofAKind = function(arr){
        var card = "";
        var kindArr = [];
        var handArr = [];
        var uniq = [];
        var finalArr = [];
        var j = 0;
        for(var i = 0; i < arr.length; i++){
            card = arr[i];
            var k = 0;
            j += 1;
            for(k = j; k < arr.length; k++){
                if(card === arr[k]){
                    kindArr.push(card);
                    k = arr.length;
                }
            }
        }
        for(var l = 0; l < kindArr.length; l++){
            if(kindArr[l] !== kindArr[l+1]){
                handArr.push(kindArr[l]);
                uniq.push(kindArr[l]);
            }
            handArr.push(kindArr[l]);
        }
        finalArr.push(handArr, uniq);
        return finalArr;
    };

    //suit evaluation
    var suitEval = function(arr){
        var handNum = arr[0].length;
        var uniqVal = arr[1].length;
        if(handNum === 5 && uniqVal === 1){
            return 'Hand: '+hand+' ('+rankings[7]+')';
        }
        else{
            return "Sorry, please try again...";
        }
    };

    //straight flush evaluation
    var straightFlushEval = function(arr){
        var handNum = arr[0].length;
        var uniqVal = arr[1].length;
        if(handNum === 5 && uniqVal === 1){
            return 'Hand: '+hand+' ('+rankings[8]+')';
        }
        else{
            return 'Hand: '+hand+' ('+rankings[6]+')';
        }
    };

    //straight evaluation
    var straightEval = function(arr){
        var faceValue = [];
        for(var i = 0; i < arr.length; i++){
            faceValue.push(faceRanking[arr[i]]);
        }
        var k = 1;
        var total = 0;
        for(var j = 0; j, k < faceValue.length; j++){
            var sub = faceValue[j] - faceValue[k];
            k += 1;
            total += sub;
        }
        if(total === 4){
            return straightFlushEval(ofAKind(suitArr(hand)));
        }
        else{
            return suitEval(ofAKind(suitArr(hand)));
        }
    };

    //normal evaluation
    var cardEval = function(arr){
        var handNum = arr[0].length;
        var uniqVal = arr[1].length;
        if(handNum === 0){
            return straightEval(cardArr(hand));
        }
        else if(handNum-uniqVal === 1){
            return 'Hand: '+hand+' ('+rankings[1]+' of '+definitions[arr[1][0]]+'s)';
        }
        else if(handNum < 5){
            var rank = handNum/uniqVal;
            return 'Hand: '+hand+' ('+rankings[rank]+')';
        }
        else{
            if(uniqVal === 2){
                return 'Hand: '+hand+' ('+rankings[5]+')';
            }
            else{
                return straightEval(cardArr(hand));
            }
        }
    };

    return {
        cardArr : cardArr,
        suitArr : suitArr,
        ofAKind : ofAKind,
        suitEval : suitEval,
        straightFlushEval : straightFlushEval,
        straightEval : straightEval,
        cardEval : cardEval
    };

})();


























