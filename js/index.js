function logIn(evt){
    /*if(localStorage.length==0){
        alert('Sign Up');        
    }else{
        location.href='app.html';
    }*/
    evt.preventDefault();
    console.log(localStorage.getItem('flag'));
    if(localStorage.getItem('flag')!=null){
        //alert('si se puede');
        location.href='app.html';
    }else{
        alert('Sign Up');
    }
}
