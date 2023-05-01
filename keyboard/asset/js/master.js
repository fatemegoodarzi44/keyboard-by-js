let txt = ''
let key_txt = document.getElementsByClassName('key_txt')
let key_all = document.getElementsByClassName('key')

function _arrow(self){
    let _status = document.getElementById('arrow_up').getAttribute('data-dd')
    if(_status == 'off'){
        self.setAttribute('data-dd', 'on')
        // ***icon
        self.children[0].remove()
        self.innerHTML='<i class="bi bi-arrow-up-circle-fill"></i>'
        // **********on keboard
        for( i=0; i<key_txt.length ; i++){
            key_up =key_txt[i].getAttribute('data-up') 
            key_txt[i].innerHTML = key_up
        }
    }else{
        self.setAttribute('data-dd', 'off')
        // ****icon
        self.children[0].remove()
        self.innerHTML='<i class="bi bi-arrow-up-circle"></i>'

        // ***********on keboard
        for( i=0; i<key_txt.length ; i++){
            key_low =key_txt[i].getAttribute('data-low') 
            key_txt[i].innerHTML = key_low
        }
    }
}

// ***************************************************************
for( i=0; i<key_txt.length ; i++){
    key_txt[i].onclick = function(){
    _status = document.getElementById('arrow_up').getAttribute('data-dd')

    if(_status == 'off'){
            txt += this.getAttribute('data-low')
            document.getElementById('monitor-txt').innerHTML=txt    

        }else{
            txt += this.getAttribute('data-up')
            document.getElementById('monitor-txt').innerHTML=txt  

        }
    }
}
// ********************mouse d u
for( i=0; i<key_all.length ; i++){
    key_all[i].onmousedown = function(){
        this.style.transform='scale(0.9)'
    }
}
for( i=0; i<key_all.length ; i++){
    key_all[i].onmouseup = function(){
        this.style.transform='scale(1)'
    }
}



// *********************************************
document.getElementById('back-space').addEventListener('click' , function(){
    txt = txt.substring(0, (txt.length) - 1)
    document.getElementById('monitor-txt').innerHTML =txt 
})
document.getElementById('space').addEventListener('click' , function(){ 
    txt +="&nbsp;"
    document.getElementById('monitor-txt').innerHTML= txt  
})
document.getElementById('return').addEventListener('click' , function(){ 
    txt +="\n"
    document.getElementById('monitor-txt').innerHTML= txt  
})