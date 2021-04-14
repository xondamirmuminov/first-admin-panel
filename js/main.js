var textColor = document.querySelector('.main__color-text');
var bgColor = document.querySelector('.main__color-bg');
var btnColor = document.querySelector('.main__color-btn');
var label = document.querySelectorAll('.main__label');
var body =  document.querySelector('body');
var btn =  document.querySelector('.main__btn');
var title =  document.querySelector('.main__title');
var text =  document.querySelector('.main__text');
var nameInp = document.querySelector('.main__name-inp');
var sizeInp = document.querySelector('.main__font-inp');
var sizeInpText = document.querySelector('.main__font-text-inp');
var textInp = document.querySelector('.main__textarea');
var opt = document.querySelector('.main__opt');

function color(e){
   e.preventDefault();
   body.style.backgroundColor = bgColor.value;
   for(let i = 0; i < opt.length; i++){
      body.style.fontFamily = opt[i].value;
    };
   btn.style.backgroundColor = btnColor.value;
   title.style.color = textColor.value;
   text.style.color = textColor.value;
   btn.style.color = textColor.value;
   title.style.fontSize = sizeInp.value+"px";
   text.style.fontSize = sizeInpText.value+"px";
    for(let i = 0; i < label.length; i++){
        label[i].style.color = textColor.value;
    };
    
  console.log(nameInp.value.length);

    if(nameInp.value.length !== 0 ){
        title.innerHTML = nameInp.value;
    }else{
        title.innerHTML = 'Title';                  
    }
    
    if(textInp.value.length !== 0 ){
        text.innerHTML = textInp.value;
    }else{
        text.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, error?';                  
    }
};
