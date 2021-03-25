// Write your JavaScript here
//the 2 inputs and the 1 output
//the inputs are the price of the thing and how much the customer paid for it
//the output is the change for the customer
function calculateChange() {
    var paid = $("#amount-received").val();
    var price = $("#amount-due").val();
    var change = parseFloat(paid) - parseFloat(price);
    console.log({paid, price, change})
    
    var dollars = Math.floor(change);
    console.log({dollars});
    var dollarsReturned = document.getElementById("dollars-output");
    dollarsReturned.textContent = dollars
    
    var wholeCents = parseFloat((change*100).toFixed(0))
        var cents = wholeCents - 100*dollars;
    console.log({cents});
    
    var quarters;
    if (cents < 100 && cents > 74) {
        quarters = 3;
        cents -= 75;
    } else if (cents < 75 && cents > 49) {
        quarters = 2;
        cents -= 50;
    } else if (cents < 50 && cents > 24) {
        quarters = 1;
        cents -= 25;
    } else  {
        quarters = 0;
        cents -= 0;
    }
    console.log({quarters});
    console.log({cents});
    var quartersReturned = document.getElementById("quarters-output");
    quartersReturned.textContent = quarters;
    
    var dimes;
    if (cents < 25 && cents > 19) {
        dimes = 2;
        cents -= 20;
    } else if (cents < 20 && cents > 9) {
        dimes = 1;
        cents -= 10;
    } else  { 
        dimes = 0;
        cents -= 0;
    }
    console.log({dimes});
    console.log({cents});
    var dimesReturned = document.getElementById("dimes-output");
    dimesReturned.textContent = dimes;
    
    var nickels;
    if (cents < 10 && cents > 4 ) {
        nickels = 1;
        cents -= 5;
    } else { 
        nickels = 0;
        cents -= 0;
    }
    console.log({nickels});
    console.log({cents});
    var nickelsReturned = document.getElementById("nickels-output");
    nickelsReturned.textContent = nickels;
    
    var pennies;
    if (cents == 4) {
        pennies = 4;    
    } else if (cents == 3) {
        pennies = 3;
    } else if (cents == 2) { 
        pennies = 2; 
    } else if (cents == 1) { 
        pennies = 1;   
    } else {
        pennies = 0;
    }
    
console.log({pennies}); 
var penniesReturned = document.getElementById("pennies-output");
    penniesReturned.innerText = pennies;   
}
    
    


function handleClickEvent() {
    var recieved = $('#amount-received').val()
    var due = $('#amount-due').val()
    //dollars = $("#dollars-output").val();

    var result = calculateChange(recieved, due);
    //how to connect and onclick to a button to execute a functio
    console.log({ result })
}

$('#calculate-change').click(handleClickEvent)
