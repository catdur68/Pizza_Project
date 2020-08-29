function getReceipt() {
    //this initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0; 
    var sizeTotal = 0; //  qty 0 x $0.00, 
    var sizeArray = document.getElementsByClassName("size");
    //identify which size was selected in the class size
    for (var i = 0; i < sizeArray.length; i++) {
        //sizeArray = number of distinct sizes, that is 5 = 5 iterations
        if (sizeArray[i].checked) {//if the radio button is for this item  
            var selectedSize = sizeArray[i].value;
            //assign that value for that button (ex:Small Pizza) to selectedSize
            text1 = text1+selectedSize+"<br>";
            //text1=You Ordered: Small Pizza
        }
    }//assigns cost to each size name
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6; //Personal Pizza costs $6.00
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal; 
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: "+runningTotal+".00");
    //these variables will get passed on to each function
    getTopping(runningTotal,text1);
};
/////////////////////////////////////////////////////////
function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];//we start with no topping, empty array
    var toppingArray = document.getElementsByClassName("toppings");
    //get all the toppings clicked in the class toppings
    for (var j = 0; j < toppingArray.length; j++) {
    //we can't use i since we already used that name
    //go through each item checked in that class
        if (toppingArray[j].checked) {
            //if the checkbox button is checked
            selectedTopping.push(toppingArray[j].value);//add the item to the array
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {//adds the cost of toppings ($1.00 per topping)
        toppingTotal = (toppingCount - 1);// -1 if for the first topping being free
    } else {
        toppingTotal = 0;
    }
  
    runningTotal = (runningTotal + toppingTotal); //take the running total obtained from size and adds the total for topping
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    getVeg(runningTotal,text1);
}


function getVeg(runningTotal, text1) {
    var VegTotal = 0;
    var selectedVeg = [];//we start with no veg, empty array
    var VegArray = document.getElementsByClassName("vegetables");
    //get all the items clicked in the class vegetables
    for (var k = 0; k < VegArray.length; k++) {
        //go through each item checked in that class
        if (VegArray[k].checked) {
            //if the checkbox button is checked
            selectedVeg.push(VegArray[k].value);//add item to the array
            console.log("selected veggie item: ("+VegArray[k].value+")");
            text1 = text1+VegArray[k].value+"<br>";
        }
    }

    var VegCount = selectedVeg.length;
    if (VegCount > 2) {//adds the cost of toppings ($1.00 per topping)
        VegTotal = (VegCount - 2);// -2 if for the first 2 veg are free
    } else {
        VegTotal = 0;
    }



    runningTotal = (runningTotal + VegTotal); //take the running total obtained from size & topping and adds the total for veg
    console.log("total selected veggies items: "+VegCount);
    console.log(VegCount+" veggies - 2 free veggies = "+"$"+VegTotal+".00");
    console.log("veggie text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML="</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};
