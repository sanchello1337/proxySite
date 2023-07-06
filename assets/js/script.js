function header__dropdown(el)
{   
    document.querySelector('.header__dropdown-menu').classList.toggle('show')

    document.querySelectorAll('.header__dropdown-toggle').forEach(element => {
        if (el != element){
            element.classList.remove('toggled')
        }
        
        
  });
    el.classList.toggle('toggled')
    document.querySelector('.header__lang-select').classList.remove('showLang')
}
function header__dropdownLang(el){
    document.querySelector('.header__lang-select').classList.toggle('showLang')
    
    document.querySelector('.header__dropdown-toggle').classList.remove('toggled')
        el.classList.toggle('toggled')


    
    document.querySelector('.header__dropdown-menu').classList.remove('show') 
}
window.addEventListener('click', e => {  
    const target = e.target
    if (!target.closest('.nav') && !target.closest('header__dropdown-toggle')) { 
      document.querySelector('.header__dropdown-menu').classList.remove('show') 
      document.querySelector('.header__lang-select').classList.remove('showLang')
      document.querySelectorAll('.header__dropdown-toggle').forEach(element => {
            element.classList.remove('toggled')
      });
    }
  })
let menu = document.querySelector('.header__row');
let burger = document.querySelector('.header__burger');
burger.onclick = function(e) {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    if (document.body.style.overflow === '') {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}
//order 
var countryType =  'usa'
var proxyType ='private'
var period ='1'
var proxyNumber ='1'
function typeSelect(element){
    document.querySelectorAll('.order__type').forEach(el =>{
        el.classList.remove('order__type_selected')
        
    })
    proxyType=element.id
    console.log(proxyType)
    element.classList.toggle('order__type_selected')
    document.querySelectorAll('.order__about-title').forEach(el=>{
        el.innerText=element.innerText
    })
    if (proxyType=='private'){
        document.querySelectorAll('.order__about-text').forEach(el=>{
            el.innerHTML=`Private proxy has a number of advantages. It works much faster relative to open servers. The operation system allows you to display information on your PC in a compressed form, that is, it saves external traffic, as well as reduces the load on the external network. You have full control over access to the local network. Using private proxies also enables you to filter advertisements and malicious files.
            <ul>
                <li>Lower blocking rate</li>
                <li>Highly anonymous</li>
                <li>Top speed & performance</li>
                <li>Long sessions & 99.9% uptime</li>
            </ul>`
        })
        
    }
    if (proxyType=='rotaining'){
        document.querySelectorAll('.order__about-text').forEach(el=>{
            el.innerHTML=`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore earum facilis reprehenderit! Voluptatum harum vitae facere numquam natus, molestias atque repellendus maiores at illo accusamus mollitia unde temporibus nihil repudiandae?`})
    }
    if (proxyType=='shared'){
        document.querySelectorAll('.order__about-text').forEach(el=>{
            el.innerHTML=`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis sunt, illum rerum minima officia eum ipsa perspiciatis saepe nam vero. Nam, tenetur reiciendis autem eum voluptatum mollitia repellendus voluptas, iusto obcaecati voluptate nostrum fugiat tempora molestias! Explicabo dicta non quisquam, vero corporis sapiente beatae qui laborum error quia dignissimos et mollitia, odio doloribus? Dolore earum facilis reprehenderit! Voluptatum harum vitae facere numquam natus, molestias atque repellendus maiores at illo accusamus Facilis deserunt rerum earum cum tempora pariatur blanditiis magni ratione facere? Quis, corrupti. Temporibus, sed distinctio! Ratione?`})
    }
    if (proxyType=='privare'){
        document.querySelectorAll('.order__about-text').forEach(el=>{
            el.innerHTML=`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis sunt, illum rerum minima officia eum ipsa perspiciatis saepe nam vero. Nam, tenetur reiciendis autem eum voluptatum mollitia repellendus voluptas, iusto obcaecati voluptate nostrum fugiat tempora molestias! Explicabo dicta non quisquam, vero corporis sapiente beatae qui laborum error quia dignissimos et mollitia, odio doloribus? Facilis deserunt rerum earum cum tempora pariatur blanditiis magni ratione facere? Quis, corrupti. Temporibus, sed distinctio! Ratione?`})
    }
}
const selectorCountry = document.querySelectorAll('.country')
const selectorPeriod= document.querySelectorAll('.period')
selectorCountry.forEach(
    selector =>{
        const selected = selector.querySelector('.order__item_selected span')
        const menu = selector.querySelector('.order__menu')
        const select = selector.querySelector('.select')
        const options = selector.querySelectorAll('.order__menu li')
        selected.addEventListener('click',()=>
            {   
                selected.classList.toggle('open')
                menu.classList.toggle('menu__open')
            }
        )
        options.forEach(option =>{
            option.addEventListener('click',()=>{
                selected.innerText = option.innerText;
                selected.classList.remove('open')
                menu.classList.remove('menu__open')
                options.forEach(option =>{
                    option.classList.remove('select');
                    
                })
                option.classList.add('select')
                countryType=option.id
                
                
            })
            
        })
        
        
    }
    
)
selectorPeriod.forEach(
    selector =>{
        const selected = selector.querySelector('.order__item_selected span')
        const menu = selector.querySelector('.order__menu')
        const select = selector.querySelector('.select')
        const options = selector.querySelectorAll('.order__menu li')
        selected.addEventListener('click',()=>
            {   
                selected.classList.toggle('open')
                menu.classList.toggle('menu__open')
            }
        )
        options.forEach(option =>{
            option.addEventListener('click',()=>{
                selected.innerText = option.innerText;
                selected.classList.remove('open')
                menu.classList.remove('menu__open')
                options.forEach(option =>{
                    option.classList.remove('select');
                    
                })
                option.classList.add('select')
                period= option.innerHTML.replace(' month','')
                
                
            })
            
        })
        
        
    }
    
)

const input = document.querySelector(".order__line");
const label = document.querySelector(".order__counter");

input.addEventListener("input", event => {
  const num = Number(input.value) / 100;
    proxyNumber = Math.round(num * 32)
  
    label.value = Math.round(num * 32);
  
});
label.addEventListener("input",event => {
    
    input.value = Math.round(((label.value)/10)*32)
    proxyNumber = label.value
    
  });
function FAQDropdown(e){
    e.classList.toggle('toggled')
    e.nextElementSibling.classList.toggle('show')
    
}


$.ajax({
    url: "", // Здесь указываем URL-адрес серверного обработчика
    type: "post",
    data: countryType, proxyType, period, proxyNumber ,
    success: function (response) {
      // Обработка успешной отправки данных
      console.log("Данные успешно отправлены!");
    },
    error: function (error) {
      // Обработка ошибок при отправке данных
      console.error("Ошибка при отправке данных: ", error);
    },
  });