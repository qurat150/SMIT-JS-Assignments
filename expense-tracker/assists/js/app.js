document.querySelector("#btn").addEventListener("click", showCurrentSalary)
var inputAmount = 0;
function showCurrentSalary() {
    var getAmount = document.querySelector("#inputAmount").value
    var getDiscription = document.querySelector("#inputDescript").value
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
    createPinDiv.innerText = getDiscription

    createChildDiv.append(createPinDiv)

    let createSecondDiv =  document.createElement("div")

    let createsecondPinDiv = document.createElement("p")
    createsecondPinDiv.classList.add("amount")
    createsecondPinDiv.classList.add("showValue")
    createsecondPinDiv.innerText = inputAmount

    createSecondDiv.append(createsecondPinDiv)

    createElem.append(createChildDiv)
    createElem.append(createSecondDiv)

    document.querySelector("#history").append(createElem)
    console.log(createElem);

    document.querySelector("#inputAmount").value = ""
    document.querySelector("#inputDescript").value = ""
}

