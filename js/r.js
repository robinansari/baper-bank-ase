document.getElementById('btn-2').addEventListener('click',function(){
   const emailField = document.getElementById('useremail');
   const email= emailField.value;
  const passwordField = document.getElementById('userpassword');
  const password = passwordField.value;
  if(email=== 'robin90@gmail.com' && password=== 'robin' ){
    window.location.href= 'bank.html';

  }
  else{
    alert('tui password vhule gessos sala')
  }

})
