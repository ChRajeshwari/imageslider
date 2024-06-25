let prev=document.querySelector(".btn1");
let next=document.querySelector(".btn2");


let arr=["img1.webp","img2.jpg","img3.jpg","img4.jpg","img5.avif","img6.webp","img7.jpg"];


var i=0;
next.addEventListener("click", function(){
  i++;
    if(i>(arr.length)-1){
        i=0
    }
    document.getElementById("image").src=arr[i];
})

prev.addEventListener("click", function(){
    i--;
      if(i<0){
         i=arr.length-1;
      }
      document.getElementById("image").src=arr[i];
      
  
  })