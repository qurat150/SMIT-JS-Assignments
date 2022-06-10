
document.getElementById("btn").addEventListener("click", showCurrentSalary);
var amount = 0;
function showCurrentSalary() {
    var showDescription = document.getElementById("inputDescript").value;
    var inputAmount = +document.getElementById("inputAmount").value;
    if (inputAmount > 0) {
        amount = amount + inputAmount
        console.log(amount)
        console.log(inputAmount);
        var html = `<div class=" incomeExpense">
                    <div>
                        <p>${showDescription}</p>
                    </div>
                    <div>
                        <p class="showValue">${inputAmount}</p>
                    </div>
                </div>`

        var div = document.createElement("div")
        var div2 = document.createElement("div")
        var div3 = document.createElement("div")
        div.className = "incomeExpense"

        var p = document.createElement("p")
        var p2 = document.createElement("p")

        p.innerText = showDescription;
        p2.innerText = inputAmount
        p2.className = "showValue"

        div2.append(p);
        div3.append(p2);
        div.append(div2, div3)
        console.log(div);

        var elements = document.querySelectorAll(".showValue");
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = amount
        }
    } else if (inputAmount < 0) {
        document.getElementById("currentBalance").innerHTML = inputAmount + "(You are on loan)";
        document.getElementById("expense").innerHTML = inputAmount;
        document.getElementById("amount").innerHTML = inputAmount;
        document.getElementById("income").innerHTML = "0.00";
    }

    // document.getElementById("description").innerHTML = showDescription;
    // document.querySelector(".transactionHistoryDisplayNone", ".incomeExpense").style.display = "flex";
    document.getElementById("history").innerHTML += html
}
