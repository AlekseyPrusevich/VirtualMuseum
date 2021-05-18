let panaram = document.querySelector(".panaram");
let panaram_img = document.querySelector(".panaram_image");

let screenWidth = window.innerWidth;
let x;

window.onload = funonload;

function funonload() {
  let panaram_img = document.querySelector(".panaram_image");
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

  let label1 = document.getElementById("panaram__label-1");
  
  switch (a)
  {
    case "img/panaram/105.jpg": 
    {
      label1.style.left = "100px";
      break;
    }
    case "img/panaram/212.jpg": 
    {
      label1.style.left = "500px";
      break;
    }
  }
}

