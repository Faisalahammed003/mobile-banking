document.getElementById('btn-add').addEventListener('click',function(event){
event.preventDefault();
const addMoneyInput = document.getElementById('add-money-input').value;
const addPinInput = document.getElementById('add-pin-input').value;

//wrong-way

if(addPinInput === '1234'){
    console.log('Adding money to your account');
    const Balance = document.getElementById('balanceAmmount').innerText;
console.log(typeof Balance);

const addMoneyNumber =parseFloat(addMoneyInput);
const balanceNumber =parseFloat(Balance);
const newbalance = addMoneyNumber + balanceNumber;

document.getElementById('balanceAmmount').innerText = newbalance;
     
}
else{
  alert('Failed to add money! please try again')
}
 
})