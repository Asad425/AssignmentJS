//Q-1

var kilometer;
function kilometerToMeter(kilometer){
    var meter=kilometer*1000;
    return meter;
}
var resultOfMeter=kilometerToMeter(20);
console.log(resultOfMeter);


//Q-2

var priceOfWatch=50;
var priceOfPhone=100;
var priceOfLaptop=500;
var quantityOfWatch;
var quantityOfPhone;
var quantityOfLaptop;
function budgetCalculator(quantityOfWatch, quantityOfPhone,quantityOfLaptop){

    var costOfWatch=priceOfWatch*quantityOfWatch;
    var costOfPhone=priceOfPhone*quantityOfPhone;
    var costOfLaptop=priceOfLaptop*quantityOfLaptop;

    return costOfWatch+costOfPhone+costOfLaptop;

}
console.log(budgetCalculator(10,20,30));



//Q-3

var totalDay;
function hotelCost(totalDay){

    if(totalDay<=10){

        var cost1=100*totalDay;
        return cost1;
    }
    else if(totalDay>=11 && totalDay<=20){
      
        var previous10=100*10;
        var dayLeft=totalDay-10;
        var cost2=dayLeft*80;
        return previous10+cost2;

    }
    else{
        previous20=(100*10)+(80*10);
        var cost3=previous20+((totalDay-20)*50);
        return cost3;
    }

}
var totalHotelCost=hotelCost(9);
console.log(totalHotelCost);




//Q-4

function megaFriend(name){

    var maximumName=name[0];

    for(var i=0;i<name.length;i++){

        var element=name[i];

        if(element.length>maximumName.length){
            maximumName=element;
        }
    }
    return maximumName;
}
var names=["Asaduzzaman" , "Asad", "Shanto","Asaduzzaman Shanto","Asaduzzaman Asad Shanto"];
var result=megaFriend(names);
console.log(result);

