document.getElementById("btn").addEventListener("click", showCurrentSalary);

function showCurrentSalary() {
    var inputAmount = [document.getElementById("inputAmount").value]
    console.log(inputAmount); 
    if (inputAmount > 0) {
        // if User click once , the value shouldn't be added but yhn tw pehli bar mein hi add ho k a rhi h value...
        // var saveAmount = inputAmount.push(document.getElementById("inputAmount").value) 
        // console.log(saveAmount);

        var elements = document.querySelectorAll(".showValue");
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = inputAmount
        }
    } else if (inputAmount < 0) {
        document.getElementById("currentBalance").innerHTML = inputAmount + "(You are on loan)";
        document.getElementById("expense").innerHTML = inputAmount;
        document.getElementById("amount").innerHTML = inputAmount;
        document.getElementById("income").innerHTML = "0.00";
    }

    var showDescription = document.getElementById("inputDescript").value;
    document.getElementById("description").innerHTML = showDescription;
    document.querySelector(".transactionHistoryDisplayNone", ".incomeExpense").style.display = "flex";

}

