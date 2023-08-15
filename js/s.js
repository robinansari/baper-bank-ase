document.getElementById('btn-deposit').addEventListener('click',function(){
    const amountDeposit = document.getElementById("amout-deposit");
    const deposit = amountDeposit.value;
    const depositNumber = parseFloat(deposit );
    amountDeposit.value = '';

    const depositSet = document.getElementById('deposit-set');
    const depositupdate= depositSet.innerText;
    const depositupdateNumber = parseFloat(depositupdate);
    
    const totall = depositupdateNumber+depositNumber;

    depositSet.innerText= totall ;


    const balance = document.getElementById('balance-total');
    const balanceVlue = balance.innerText;
    const balaceNumber = parseFloat(balanceVlue);
     const newbalance = balaceNumber+depositNumber
     balance.innerText=newbalance;


    


})