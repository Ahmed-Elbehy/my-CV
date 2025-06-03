let BT_about_me = document.querySelector("#about_Bt");
let ms_about = document.querySelector(".ms-about_me");
let ms_about_p = document.querySelector(".ms-about_me p");
let contacting = document.getElementById("contacting")
let pointer = document.querySelector(".contacting #contacting p")
let mydata = document.getElementById("mydata")
let action = false;
if(BT_about_me){
    BT_about_me.addEventListener( "click", function(){
    if(!action){
        if(screen.availWidth >767){
        ms_about_p.style.cssText="visibility:visible;opacity:1;transition-duration:4s"
        ms_about.style.cssText="width:750px;opacity:1;transition-duration:1s"
        }else{
        ms_about_p.style.cssText="visibility:visible;opacity:1;transition-duration:7s"
        ms_about.style.cssText="height:330px;opacity:1;transition-duration:1s"
    }
        action = true
    }else{
        if(screen.availWidth > 767){
            ms_about_p.style.cssText="visibility:hidden;opacity:0"
        ms_about.style.cssText="width:0%;transition-duration:1s"
        }else{
            ms_about_p.style.cssText="visibility:hidden;opacity:0"
        ms_about.style.cssText="height:0%;transition-duration:1s"
        }
        action= false
    }
}
)
}
let mood = false;
if(contacting){
    contacting.onclick=function(){
    if(mood == false){
        pointer.style.cssText = "transform:rotate(180deg);color:green; transition-duration: 1s;"
        mydata.style.cssText = "opacity:1;transition-duration: 2s;"
        mood = true
    }else{
        pointer.style.cssText = "transform:rotate(0deg);color:red;transition-duration: 1s;"
        mydata.style.cssText = "opacity:0;transition-duration: 2s"
        mood = false
    }
}




}










