document.getElementById('btn-withdraw').addEventListener('click',function(){
    const amountWidraw = document.getElementById('amout-withdraw');
    const amountValue = amountWidraw.value;
    amountWidraw.value = '';
    const amountNumber = parseFloat(amountValue);
    if(isNaN(amountNumber)){
        alert('provide a number')
        return;
    }

    const WithdrawSet = document.getElementById('widraw-seting');
    const widrawString = WithdrawSet.innerText;
    const widrawNumber = parseFloat(widrawString);
    
    
  

  

    const totallbalance =document.getElementById('balance-total');
    const balanceString = totallbalance.innerText;
    const balanceNumber = parseFloat(balanceString);

    if(amountNumber>balanceNumber){
        alert('tor baper banke ato taka nai')
        return;
    }

    const totalladd = widrawNumber+amountNumber;
    WithdrawSet.innerText = totalladd; 

  

    totallbalance.innerText = balanceNumber-amountNumber;
    

   
  })