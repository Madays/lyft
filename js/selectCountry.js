/*---------Displayando paises--------*/
var alphabet =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','#'];
for(var i=0;i<infoCountry.length;i++){
    var htmlLiCountry= '<li><a href="signUpNumber.html" style="text-decoration: none;">'+        
            '<img src='+ infoCountry[i].srcImg +' alt="" style="padding-right:10px;">'+
            '<span>'+infoCountry[i].name+'</span>'+
                '<span style="float:right;margin-top:-5px;padding-right: 4px;">'+alphabet[2*i]+'<br>'+alphabet[2*i+1]+'</span>'+
                '<hr>'+
          '</a></li>';
    var listCountry = document.getElementById('list-country');
    listCountry.innerHTML+=htmlLiCountry;
};
/*---------Actualizar pais de registro---------*/
function updateCountry(){    
    var country = document.getElementById('country');
    localStorage.setItem('name',country);
    country.src="flags/Wallis-And-Futuna.png";
}


