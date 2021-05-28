let panaram = document.querySelector(".panaram");
let panaram_img = document.querySelector(".panaram_image");

let new_panaram_img_Width;
let new_panaram_img_Height;

let screenWidth = window.innerWidth;
let x;

let label1;
let label2;
let label3;
let label4;
let label5;
let label6;
let label7;

window.onload = funonload;

function funonload() {
  panaram_img = document.querySelector(".panaram_image");
  let panaram_img_Width = panaram_img.clientWidth;

  panaram.scrollTo(panaram_img_Width / 2.4,0);
} 

panaram_img.addEventListener('mousemove', function(e) {
    x = e.offsetX;
    screenWidth = window.innerWidth;

    if(screenWidth >= 1700)
      panaram.scrollTo(- 140 + x / 1.5, 0);
    else if(screenWidth >= 1500)
      panaram.scrollTo(- 120 + x / 1.4, 0);
    else if(screenWidth >= 1200)
      panaram.scrollTo(- 100 + x / 1.3, 0);
    else if(screenWidth >= 1000)
      panaram.scrollTo(- 80 + x / 1.2, 0);
    else
      panaram.scrollTo(- 60 + x / 1.1, 0);
});


function l_image (a) {
  document.panarama_img.src = a;
      
  label1 = document.getElementById("panaram__label-1");
  label2 = document.getElementById("panaram__label-2");
  label3 = document.getElementById("panaram__label-3");
  label4 = document.getElementById("panaram__label-4");
  label5 = document.getElementById("panaram__label-5");
  label6 = document.getElementById("panaram__label-6");
  label7 = document.getElementById("panaram__label-7");

  hideAllLabel();

  setTimeout(() => {  
    new_panaram_img = document.getElementById("panaram_image");
    new_panaram_img_Width = new_panaram_img.clientWidth;
    new_panaram_img_Height = new_panaram_img.clientHeight;
  
    switch (a)
    {
      case "img/panaram/entrance.jpg": 
      {
        label1.style.top = new_panaram_img_Height / 3.2 + "px";
        label1.style.left = new_panaram_img_Width * 0.612 + "px";
        label1.href = "javascript:l_image('img/panaram/foyer.jpg')"
        label1.style.display = "block";
        break;
      }
      case "img/panaram/foyer.jpg": 
      {
        label1.style.top = new_panaram_img_Height / 1.8 + "px";
        label1.style.left = new_panaram_img_Width * 0.44 + "px";
        label1.href = "javascript:l_image('img/panaram/firstСorridor.jpg')"
        label1.title = "Коридор первого этажа";
        label1.style.display = "block";

        label2.style.top = new_panaram_img_Height / 2.2 + "px";
        label2.style.left = new_panaram_img_Width * 0.94 + "px";
        label2.href = "javascript:l_image('img/panaram/entrance.jpg')"
        label2.title = "Вход в колледж";
        label2.style.display = "block";
        break;
      }
      case "img/panaram/firstСorridor.jpg": 
      {
        label1.style.top = new_panaram_img_Height / 2.8 + "px";
        label1.style.left = new_panaram_img_Width * 0.19 + "px";
        label1.href = "javascript:l_image('img/panaram/101.jpg')"
        label1.title = "Кабинет 101";
        label1.style.display = "block";

        label2.style.top = new_panaram_img_Height / 3 + "px";
        label2.style.left = new_panaram_img_Width * 0.219 + "px";
        label2.href = "javascript:l_image('img/panaram/dayDep.jpg')"
        label2.title = "Дневное отделение";
        label2.style.display = "block";

        label3.style.top = new_panaram_img_Height / 2.3 + "px";
        label3.style.left = new_panaram_img_Width * 0.24 + "px";
        label3.href = "javascript:l_image('img/panaram/zaoDep.jpg')"
        label3.title = "Заочное отделение";
        label3.style.display = "block";
        break;
      }
      case "img/panaram/101.jpg": 
      {
        label1.style.top = new_panaram_img_Height / 2.4 + "px";
        label1.style.left = new_panaram_img_Width * 0.676 + "px";
        label1.href = "javascript:l_image('img/panaram/firstСorridor.jpg')"
        label1.title = "Коридор первого этажа";
        label1.style.display = "block";
        break;
      }
      case "img/panaram/dayDep.jpg": 
      {
        label1.style.top = new_panaram_img_Height / 2.6 + "px";
        label1.style.left = new_panaram_img_Width * 0.94 + "px";
        label1.href = "javascript:l_image('img/panaram/firstСorridor.jpg')"
        label1.title = "Коридор первого этажа";
        label1.style.display = "block";
        break;
      }
      case "img/panaram/zaoDep.jpg": 
      {
        label1.style.top = new_panaram_img_Height / 2.6 + "px";
        label1.style.left = new_panaram_img_Width * 0.84 + "px";
        label1.href = "javascript:l_image('img/panaram/firstСorridor.jpg')"
        label1.title = "Коридор первого этажа";
        label1.style.display = "block";
        break;
      }
      case "img/panaram/methodical.jpg": 
      {
        label1.style.top = new_panaram_img_Height / 2 + "px";
        label1.style.left = new_panaram_img_Width * 0.464 + "px";
        label1.href = "javascript:l_image('img/panaram/library_2.jpg')"
        label1.title = "Коридор второго этажа";
        label1.style.display = "block";
        break;
      }
      case "img/panaram/library.jpg": 
      {
        label1.style.top = new_panaram_img_Height / 2.5 + "px";
        label1.style.left = new_panaram_img_Width * 0.65 + "px";
        label1.href = "javascript:l_image('img/panaram/library_2.jpg')"
        label1.title = "Книжные стеллажи";
        label1.style.display = "block";
  
        label2.style.top = new_panaram_img_Height / 2.5 + "px";
        label2.style.left = new_panaram_img_Width * 0.94 + "px";
        label2.href = "javascript:l_image('img/panaram/library_2.jpg')"
        label2.title = "Коридор второго этажа";
        label2.style.display = "block";
        break;
      }
      case "img/panaram/library_2.jpg": 
      {
        label1.style.top = new_panaram_img_Height / 2.5 + "px";
        label1.style.left = new_panaram_img_Width * 0.094 + "px";
        label1.href = "javascript:l_image('img/panaram/library.jpg')"
        label1.title = "Читальный зал";
        label1.style.display = "block";
        break;
      }
      case "img/panaram/212.jpg": 
      {
        label1.style.left = "500px";
        break;
      }
    }

  }, 1000);
}

function hideAllLabel(){
  label1.style.display = "none";
  label2.style.display = "none";
  label3.style.display = "none";
  label4.style.display = "none";
  label5.style.display = "none";
  label6.style.display = "none";
  label7.style.display = "none";
}

