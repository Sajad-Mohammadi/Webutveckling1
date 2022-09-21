(function(document){
   var _bars = [].slice.call(document.querySelectorAll('.bar-inner'));

   _bars.map(function(bar, index){
    bar.style.width = bar.dataset.procent
   })
})(document);