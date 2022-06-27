document.querySelector("#btn").addEventListener("click", showCurrentSalary)
var inputAmount = 0;
function showCurrentSalary() {
    var getAmount = document.querySelector("#inputAmount").value
    if (getAmount > 0) {
        inputAmount = inputAmount + +getAmount
        document.getElementById("currentBalance").innerHTML = inputAmount;
        document.getElementById("income").innerHTML = inputAmount;

    } else if (getAmount < 0) {
        document.getElementById("expense").innerHTML = getAmount

    }
    let createElem = document.createElement("div")
    createElem.setAttribute("class" , "transactionHistoryDisplayNone incomeExpense")

    let createChildDiv = document.createElement("div")

    let createPinDiv = document.createElement("p")
    createPinDiv.classList.add("description")
    createPinDiv.innerText = 0.00

    createChildDiv.append(createPinDiv)

    let createSecondDiv =  document.createElement("div")

    let createsecondPinDiv = document.createElement("p")
    createsecondPinDiv.classList.add("amount")
    createsecondPinDiv.classList.add("showValue")
    createsecondPinDiv.innerText = 0.00

    createSecondDiv.append(createsecondPinDiv)

    createElem.append(createChildDiv)
    createElem.append(createSecondDiv)
    console.log(createElem);


    // var getDiscription = document.querySelector("#inputDescript").value
    // document.querySelector(".description").innerHTML = getDiscription
    // document.querySelector("#amount").innerHTML = getAmount

    document.querySelector("#inputAmount").value = " "
    document.querySelector("#inputDescript").value = " "
}

