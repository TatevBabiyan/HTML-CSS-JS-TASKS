function validatemail(){
  const email = document.getElementById('email').value
  const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  if(regex.test(email)) {
    alert("Valid email!")
  } else {
    alert("Invalid email!")
  }
}

function validatename(){
    const name = document.getElementById('name').value;
    const regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(regex.test(name)) {
        alert('Valid name');
    } else {
        alert('Invalid name');
        document.getElementById('name').focus();
    }
}
