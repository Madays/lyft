/*------Validar formulario----*/
function adviceMessage(_id,_advice){
    var id = document.getElementById(_id);
    var span = document.createElement('span');
    var content = document.createTextNode(_advice);
    span.appendChild(content);
    id.parentNode.appendChild(span);    
}
//eliminar adviceMessage
function deleteAdviceMessage(_id){
    var id = document.getElementById(_id);
    id.parentNode.removeChild(id.nextSibling);
}
//validar nombre, apellido, correo, password
var validate = {
    isText:function(_string){
        var regex = /([0-9]+)/;//expresion de numeros del 1 al 9
		return !regex.test(_string);
    },
    isEmail:function(_string){
        var regex = /([a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]+)/g;
        return regex.test(_string);              
    },
}

function validateName(){
    
    var name = document.getElementById('nameLastname');
    if(validate.isText(name.value)){
        if(name.nextSibling!==null){
            deleteAdviceMessage('name');    
        }        
    }else if(name.nextSibling==null){
        adviceMessage('name','Debe ingresar su nombre');
    }       
}

function validateEmail(){
    
    var email = document.getElementById('input-email');
    if(validate.isEmail(email.value)){
        if(email.nextSibling!==null){
            deleteAdviceMessage('input-email');                
        }        
    }else if(email.nextSibling==null){        
        adviceMessage('input-email','Debe ingresar su apellido');
    }       
}