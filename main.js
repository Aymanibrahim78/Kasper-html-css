let iconUp = document.getElementById('iconUp');

window.onscroll = function(){
    if(scrollY >= 350){
        iconUp.style.display='block'
    }
    else{
        iconUp.style.display='none'
    }
    
}
iconUp.onclick = function(){
    scroll({
        top:0 ,top:0 ,
        behavior :'smooth'

        
    })

}

