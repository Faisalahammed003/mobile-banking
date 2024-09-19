document.getElementById('btn-cash').addEventListener('click',function(event){
    event.preventDefault();
    const cashMoneyInput = document.getElementById('cash-money-input').value;
    const cashPinInput = document.getElementById('cash-pin-input').value;
    const CashOutNumber = parseFloat(cashMoneyInput);

    if(cashPinInput === "1234"){
       const balance= document.getElementById('balanceAmmount').innerText;
        const balanceNumber = parseFloat(balance);
        const newbalance=balanceNumber - CashOutNumber;
        console.log(newbalance);

        document.getElementById('balanceAmmount').innerText = newbalance;
        
    }
    else{
        alert('Failed to Cash Out! please try again')
    }
    
})