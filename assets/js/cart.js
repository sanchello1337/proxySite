function check(){
    document.querySelectorAll('.cart__input').forEach(el=>{
        if ((el.querySelector('input').value=='')&&(el.id!='nn') ){
            el.classList.toggle('nessesary')
                
            
        }
        else{
            el.classList.remove('nessesary')
            document.location.href = ''
        }
        
    })
    
}
var checkbox = document.querySelector('.cart__agreement').querySelector('input')

checkbox.addEventListener('click', event=>{
    if(checkbox.value =='on'){
        document.querySelector('.cart__button').outerHTML=`<button onclick="check()" class="cart__button button">Order</button>`
    }
    else{
        document.querySelector('.cart__button').outerHTML=`<button  class="cart__button button">Order</button>`
    }
})