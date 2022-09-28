window.onscroll = function () {
   startAnim()
 }

 const html = document.getElementById("html-bar");
 const css = document.getElementById("css-bar");
 const js = document.getElementById("js-bar");
 const vue = document.getElementById("vue-bar");
 const percent = document.getElementsByClassName("percent");

 const pos = html.offsetTop;
 let clientHeight = document.getElementById('p-preview').clientHeight;

 function startAnim() {
   if (window.scrollY >= (pos - clientHeight - 70)) {
     html.classList.add("html-anim");
     css.classList.add("css-anim");
     js.classList.add("js-anim");
     vue.classList.add("vue-anim");

     for (index = 0; index < percent.length; index++) {
       percent[index].classList.add("opacity-anim");
     }

   } else {
     html.classList.remove("html-anim");
     css.classList.remove("css-anim");
     js.classList.remove("js-anim");
     vue.classList.remove("vue-anim");

     for (index = 0; index < percent.length; index++) {
       percent[index].classList.remove("opacity-anim");
     }
   }
 }