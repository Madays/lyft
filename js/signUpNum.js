function saveNumPhone(){    
    var numPhone = document.getElementById('phone-number'); localStorage.setItem('numPhone',numPhone.value);
    //localStorage.getItem('numPhone');
}

function updateFlagCodeContry(){
    var flag = document.getElementById('img-flag');
    flag.src= localStorage.getItem('flag');
}