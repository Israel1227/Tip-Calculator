function insert(num){
    console.log("function called")
    let billInput = document.getElementById("billInput").value;
    let numberOfPeople = document.getElementById("peopleInput").value;
    amount = billInput * (num / 100);
    total = numberOfPeople * amount;

    document.getElementById("amount").innerHTML = amount.toFixed(4);
    document.getElementById("total").innerHTML = total.toFixed(2);
    
}


function submitCustom(){
    // TODO:GET INPUT VALUE: const inputVal ...
    // TODO: Call insert function: insert(inputVal)
    const inputValue = document.getElementById("customPercent").value;
    insert(inputValue);
}


function resetAmount(){
    document.getElementById("amount").innerHTML = 0;
    document.getElementById("total").innerHTML = 0;
}


