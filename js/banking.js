//get input data convert to float 
function getInputData(idName) {
    const inputValue = document.getElementById(idName);
    const inputAmount = parseFloat(inputValue.value)
    inputValue.value = '';
    return inputAmount;
}

// deposit and withdraw display amount
function displayAmount(idName, newAmount) {
    const amount = document.getElementById(idName);
    const preveousAmount = parseFloat(amount.innerText);
    const totalAmount = preveousAmount + newAmount;
    amount.innerText = totalAmount.toFixed(2);
}

// balnce function deposit and withdraw input calculation

function getDisplayPreveousTotal() {
    const totalBalance = document.getElementById('total-balance');
    const oldBalanceAmount = parseFloat(totalBalance.innerText)
    return oldBalanceAmount;
}

function displayBalnce(amount, isTrue) {
    const totalBalance = document.getElementById('total-balance');

    const oldBalanceAmount = getDisplayPreveousTotal();

    if (isTrue == true) {

        totalBalance.innerText = (oldBalanceAmount + amount).toFixed(2);
    } else {
        totalBalance.innerText = (oldBalanceAmount - amount).toFixed(2);

    }
}

// deposti handle
document.getElementById('deposit-button').addEventListener('click', function() {
    // 
    // get input data of deposit
    const depositInputamount = getInputData('deposit-input');

    if (depositInputamount > 0) {
        displayAmount('total-deposit', depositInputamount);
        // blance add with desposit input
        displayBalnce(depositInputamount, true);
    }

})

// withdaraw handle
document.getElementById('withdraw-button').addEventListener('click', function() {

    // get withdaraw input 
    const newWithdrawAmount = getInputData('withdraw-input');
    const preveousDisplayAmount = getDisplayPreveousTotal();
    if (newWithdrawAmount > preveousDisplayAmount) {

        alert('insufficent balance');
        const messege = document.getElementById('balance-low')
        const preveousBalance = getDisplayPreveousTotal();
        messege.innerText = ' insufficent balance!! your Available balance: ' + preveousBalance;
        messege.style.color = "red";
    }
    if (newWithdrawAmount < preveousDisplayAmount && newWithdrawAmount > 0) {
        displayAmount('total-withdraw', newWithdrawAmount);
        // blance minus from withdarw
        displayBalnce(newWithdrawAmount, false);

    }


})