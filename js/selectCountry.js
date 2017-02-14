var abcdario = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
var htmlLiCountry= '<li>'+
        '<img src='+infoCountry[0].srcImg+' alt="" style="padding-right:10px;">'+
        '<span>mad</span>'+
            '<span style="float:right;margin-top:-5px;padding-right: 4px;">'+abcdario[i]+'<br>B</span>'+
            '<hr>'+
      '</li>';
var listCountry = document.getElementById('list-country');
listCountry.innerHTML+=htmlLiCountry;
