// var theDelay = 2;
// document.getElementById("sub-heading-text").style.visibility = "hidden";

// function timer() {
    
//     setTimeout( function(){
//         toggleText();    
//     }, theDelay * 1000 );
// }
// // Call the timer
// timer();

// // Toggle visibility
// function toggleText() {
//     document.getElementById("sub-heading-text").style.visibility = "visible";
// }
// toggleText();



(function(window, document, undefined){
    function showText(id,delay){
        var elem=document.getElementById(id);
        setTimeout(function(){elem.style.visibility='visible';},delay*1000)
    }

    function makeNewPosition(){
            
        // Get viewport dimensions (remove the dimension of the div)
        var h = window.screen.height - 50;
        var w = window.screen.width - 50;
        
        var nh = Math.floor(Math.random() * h);
        var nw = Math.floor(Math.random() * w);
       
        return [nh,nw];
            
        
    }
    // code that should be taken care of right away
    
    window.onload = init;
    
      function init(){

        showText('heading-text', 0)
        showText('sub-heading-text', 1.4);
        animateDiv('spot-blur');
        document.getElementById("sub-heading-text").style.marginTop = "-20px";

        
        
        
        
        
        function animateDiv(myclass){
            var newq = makeNewPosition();
            // console.log([newq]);
            document.getElementById(myclass).animate(
                [{ top: newq[0].toString()},{ left: newq[1].toString() }]
                , {duration: 5000, iterations: 10}
            );
            
        };
        
        
        
        
        
        document.body.onmousemove = function(e) {
            var x = e.clientX;
            var y = e.clientY;
            console.log[x,y];

            // setTimeout()
            
            document.getElementById("wave").animate(
                [
                    {
                        top: x,
                        left: y
                    }
                    ,
                    { top: (y-750).toString() + "px",
                      left: (x-800).toString() + "px",
                    }
                ], {
                    duration: 10000,
                    iterations: 1,
                    delay: 100,
                    easing: "cubic-bezier(0.49, 0.47, 0.63, 0.85",
                } 
            )
            setTimeout(function() {
                try {
                    document.getElementById("wave").style.top = (y-750).toString() + "px";
                    document.getElementById("wave").style.left = (x-800).toString() + "px";
                }
               catch (error) {}
            }, 10000)
            
        }
      }
    
    })(window, document, undefined);