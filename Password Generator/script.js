
function randomNumberGenerator(min, max) {
  return Math.floor(Math.random() * (max+1 - min) + min);
}


function passwordGenerator() {
  let password ="";
  let passLength = Number(document.querySelector('#passLength').value);
  let upperCase = document.querySelector('#upperCase').checked;
  let lowerCase = document.querySelector('#lowerCase').checked;
  let num = document.querySelector('#num').checked;
  let special = document.querySelector('#special').checked;

  if(upperCase + lowerCase + num + special  <= 0){
    window.alert("Please tick at least one checkbox");
    return;
  }

  for(let i = 0; i<passLength; i++) {

    let randomPicker = randomNumberGenerator(0, 3);

    if (upperCase && randomPicker === 0 ) {
      password+=String.fromCharCode(randomNumberGenerator(65,90));
    }

    else if(lowerCase && randomPicker === 1){
      password+=String.fromCharCode(randomNumberGenerator(97,122));
    }

    else if(num && randomPicker === 2){
      password+=randomNumberGenerator(0,9);
    }

    else if(special && randomPicker === 3){
      password+=String.fromCharCode(randomNumberGenerator(33,47));
    }

    else{
      i--;
    }


  }

    document.querySelector('#passGenerated').value = password;
    console.log(password);

}


    document.querySelector('#generate').addEventListener('click', passwordGenerator);
