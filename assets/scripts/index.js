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
        var h = window.screen.height - 50;
        var w = window.screen.width - 50;
        
        var nh = Math.floor(Math.random() * h);
        var nw = Math.floor(Math.random() * w);
       
        return [nh,nw];
            
    }
    
    window.onload = init;
    
      function init(){

        var bio = document.getElementById("bio");
        var socialLogo = document.getElementById('social-logo');
        var socialLogo2 = document.getElementById('social-logo2');
        var divider = document.getElementById("divider");
        var divider2 = document.getElementById("divider2");
        var socialLogoContainer = document.getElementById("social-logo-container");
        var bioRect = bio.getBoundingClientRect();
        var bioWidth = bioRect.width * 0.5;
        var bioWidthPercentage = (bioWidth / screen.width) * 100;
        divider.style.width = `${bioWidthPercentage}%`;
        divider2.style.width = `${bioWidthPercentage}%`;

        if (window.screen.width > window.screen.height) {
            socialLogo.style.height = "8vh";
            socialLogo.style.width = "auto";
        } else if (window.screen.height > window.screen.width) {
            socialLogo.style.height = "auto";
            socialLogo.style.width = "8vw";
        }

        // if (window.screen.width > window.screen.height) {
        //     divider.style.width = `calc(${window.screen.width * 0.3})`;
        //     divider2.style.width = `calc(${window.screen.width * 0.3})`;
        // } else if (window.screen.height > window.screen.width) {
        //     divider.style.width = `calc(${window.screen.width * 0.5})`;
        //     divider2.style.width = `calc(${window.screen.width * 0.5})`;
        // }
        
        showText('heading-text', 0.2)
        showText('sub-heading-text', 1.85);
        showText('divider', 3.5);
        showText('bio', 4.3);
        showText('social-logo', 5.8);
        showText('social-logo2', 5.8);
        showText('divider2', 5.8);

        var x = bio.getBoundingClientRect();
        var y = [x.bottom, x.left]
        
        divider2.style.left = `${y[1]}px`;
        divider2.style.top = `calc(${y[0]}px)`;
        socialLogoContainer.style.left = `${y[1]}px`;
        socialLogoContainer.style.top = `calc(${y[0]}px + 2.5vh)`;
        var twitterCoords_ = socialLogo.getBoundingClientRect();
        var twitterCoords = [twitterCoords_.top, twitterCoords_.left];
        // socialLogo2.style.left = `calc(${twitterCoords[1]}px + 10vh)`;
        // socialLogo2.style.top = `calc(${twitterCoords[0]}px)`;
        

        // document.getElementById("sub-heading-text").animate(
        //     [
        //     {
        //         "left": "-70%",
        //     },
        //     {
        //         "left": "8%",
        //     }
        // ], {
        //     duration: 2000,
        //     iterations:1,
        //     delay: 1700,
        //     easing: "cubic-bezier(0.23, 1, 0.320, 1)",
        // }
        // );
        // document.getElementById("sub-heading-text").style.left = "8%";
        
        
        window.onresize = function(e) {
            var x = bio.getBoundingClientRect();
            var y = [x.bottom, x.left]
            var twitterCoords_ = socialLogo.getBoundingClientRect();
            var twitterCoords = [twitterCoords_.top, twitterCoords_.left];
            
            // console.log(y);
            // var a = socialLogo.getBoundingClientRect();
            // var b = [a.bottom, a.left];
            socialLogoContainer.style.left = `${y[1]}px`;
            socialLogoContainer.style.top = `calc(${y[0]}px + 2.5vh)`;
            // console.log(socialLogo.style.top);
            divider2.style.left = `${y[1]}px`;
            divider2.style.top = `calc(${y[0]}px)`;
            // socialLogo2.style.left = `calc(${twitterCoords[1]}px + 10vh)`;
            // socialLogo2.style.top = `calc(${twitterCoords[0]}px)`;


            if (window.screen.width > window.screen.height) {
                socialLogo.style.height = "8vh";
                socialLogo.style.width = "auto";
                socialLogo2.style.height = "8vh";
                socialLogo2.style.width = "auto";
            } else if (window.screen.height > window.screen.width) {
                socialLogo.style.height = "auto";
                socialLogo.style.width = "8vw";
                socialLogo2.style.height = "auto";
                socialLogo2.style.width = "8vw";
            }

            // if (window.screen.width > window.screen.height) {
            //     divider.style.width = "30%";
            //     divider2.style.width = "30%";
            // } else if (window.screen.height > window.screen.width) {
            //     divider.style.width = "50%";
            //     divider2.style.width = "50%";
            // }

        }

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