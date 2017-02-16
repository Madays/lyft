function saveNumPhone(){    
    var numPhone = document.getElementById('phone-number'); localStorage.setItem('numPhone',numPhone.value);
    //localStorage.getItem('numPhone');
}

function updateFlagCodeContry(){
    var flagCountry = document.getElementById("img-flag");
    flagCountry.src = localStorage.getItem('codeCountry');
}