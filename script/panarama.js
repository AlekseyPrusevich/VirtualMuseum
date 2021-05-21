let panaram = document.querySelector(".panaram");
let panaram_img = document.querySelector(".panaram_image");

let new_panaram_img_Width;
let new_panaram_img_Height;

let screenWidth = window.innerWidth;
let x;

let label1;
let label2;

window.onload = funonload;

function funonload() {
  panaram_img = document.querySelector(".panaram_image");
  let panaram_img_Width = panaram_img.clientWidth;

  panaram.scrollTo(panaram_img_Width / 2,0);
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

  hideAllLabel();

  setTimeout(() => {  
    new_panaram_img = document.getElementById("panaram_image");
    new_panaram_img_Width = new_panaram_img.clientWidth;
    new_panaram_img_Height = new_panaram_img.clientHeight;

  
    console.log(new_panaram_img_Width);
    console.log(new_panaram_img_Height);
  
    switch (a)
    {
      case "img/panaram/105.jpg": 
      {
        label1.style.top = "320px";
        label1.style.display = "block";
        break;
      }
      case "img/panaram/methodical.jpg": 
      {
        label1.style.top = new_panaram_img_Height / 2.5 + "px";
        label1.style.left = new_panaram_img_Width * 0.415 + "px";
  
        label1.style.display = "block";
        break;
      }
      case "img/panaram/library.jpg": 
      {
        label1.style.top = new_panaram_img_Height / 2.5 + "px";
        label1.style.left = new_panaram_img_Width * 0.8 + "px";
        label1.style.display = "block";
  
        label2.style.top = "300px";
        label2.style.left = "2800px";
        label2.href = "javascript:l_image('img/panaram/library_2.jpg')"
        label2.style.display = "block";
        break;
      }
      case "img/panaram/library_2.jpg": 
      {
        label1.style.top = "320px";
        label1.style.left = "420px";
        label1.href = "javascript:l_image('img/panaram/library.jpg')"
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
}

