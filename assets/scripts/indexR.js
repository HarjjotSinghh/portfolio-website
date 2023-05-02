var Flickity = require('flickity-imagesloaded');


(function(window, document, undefined){
    function showText(id,delay){
        var elem=document.getElementById(id);
        setTimeout(function(){elem.style.visibility='visible';},delay*1000)
    }

    function animateElement(element, delay, duration) {
        element.style.visibility = "hidden";
        setTimeout(function() {
            element.style.visibility= "visible";
            element.animate([
                {transform: `translateX(-100%)`,
                 opacity: 0},
                {opacity: 1}
            ], {
                // delay: delay*1000,
                duration: duration*1000,
                iterations: 1,
                easing : "cubic-bezier(0.2, 0, 0.190, 1)",
                fill: "forwards"
            })
        }, delay*1000);
    };

    function animateMainBody(element, distance, duration) {
        element.style.visibility = "hidden";
        setTimeout(function() {
            element.style.visibility= "visible";
            element.animate([
                {top: distance + "px", opacity: 0},
                {top: "-100%", opacity: 1}
            ], {
                // delay: delay*1000,
                duration: duration*1000,
                iterations: 1,
                easing : "cubic-bezier(0.2, 0, 0.190, 1)"
            })
        }, delay*1000);
    }

    function animateImage(element, delay, duration) {
        element.style.visibility = "hidden";
        setTimeout(function() {
            element.style.visibility= "visible";
            element.animate([
                {transform: `translateY(-100%)`, opacity: 0},
                {opacity: 1}
            ], {
                // delay: delay*1000,
                duration: duration*1000,
                iterations: 1,
                easing : "cubic-bezier(0.2, 0, 0.190, 1)",
                fill: "forwards"
            })
        }, delay*1000);
    };

    function animateNavArrow(element, delay, duration) {
        element.style.visibility = "hidden";
        setTimeout(function() {
            element.style.visibility= "visible";
            element.animate([
                {opacity: 0},
                {opacity: 1}
            ], {
                // delay: delay*1000,
                duration: duration*1000,
                iterations: 1,
                easing : "cubic-bezier(0.2, 0, 0.190, 1)",
                fill: "forwards"
            })
        }, delay*1000);
    };

    function makeNewPosition(){
        var h = window.screen.height - 50;
        var w = window.screen.width - 50;
        
        var nh = Math.floor(Math.random() * h);
        var nw = Math.floor(Math.random() * w);
       
        return [nh,nw];
            
    }
    
    window.onload = init;
    
    function init(){
        var lightMode = false;
        var darkMode = true;
        var spotBlur = document.getElementById("spot-blur");
        var heading = document.getElementById("heading-text");
        var subHeading = document.getElementById("sub-heading-text");
        var bio = document.getElementById("bio");
        var socialLogo = document.getElementById('social-logo');
        var socialLogo2 = document.getElementById('social-logo2');
        var socialLogo3 = document.getElementById('social-logo3');
        var divider = document.getElementById("divider");
        var divider2 = document.getElementById("divider2");
        var socialLogoContainer = document.getElementById("social-logo-container");
        var lightThemeIcon =  document.getElementById("light-mode-icon");
        var darkThemeIcon =  document.getElementById("dark-mode-icon");
        var sunIcon = document.getElementById("sun-icon");
        var bioRect = bio.getBoundingClientRect();
        var bioWidth = bioRect.width * 0.5;
        var bioWidthPercentage = (bioWidth / screen.width) * 100;
        var wave = document.getElementById("wave");
        var text = document.getElementById("text");
        var image = document.getElementById("my-image");
        var navArrowContainer = document.getElementById("nav-arrow-container");
        var navArrow = document.getElementById("nav-arrow");
        var aboutMe = document.getElementById("about-me");
        var aboutMeText = document.getElementById("about-me-text");
        var skillsText = document.getElementById("skills-text");
        var skillHeadings = document.getElementsByClassName("skill-heading");
        // divider.style.width = `${bioWidthPercentage}%`;
        // divider2.style.width = `${bioWidthPercentage}%`;
        lightThemeIcon.style.backgroundImage = "none";
        var x = bio.getBoundingClientRect();
        var y = [x.bottom, x.left]
        var mainContainer = document.getElementById("main-container");
        var backgroundWrapper = document.getElementById("background-wrapper");
        var elements = [heading, subHeading, divider, bio, divider2, socialLogoContainer];
        // elements.forEach(e => {
        //     elem.style.visibility = "hidden";
        // });
        var loadingScreen = document.getElementById('loading-screen');
          loadingScreen.style.display = 'none';
        var boxes = document.getElementsByClassName("box");
        var backArrow = document.getElementById("back-arrow-img");
        var headingss = document.getElementsByClassName("skill-heading");
        var gfxWorkContainer = document.querySelector(".gfx-flickity");
        

        // window.addEventListener('load', function() {
        //     var flickity = document.querySelector('.gfx-flickity').flickityInstance;
        //     flickity.resize();
        // });
        
        // window.addEventListener('resize', function() {
        //     var flickity = document.querySelector('.gfx-flickity').flickityInstance;
        //     flickity.resize();
        // });

        var subWorkContainers = document.getElementsByClassName("sub-work-container");
          
        // mainContainer.style.width = `${window.innerWidth}px`;
        // mainContainer.style.height = `${window.innerHeight}px`;
        // mainContainer.style.maxWidth = `${window.innerWidth}px`;
        // mainContainer.style.maxHeight = `${window.innerHeight}px`;

        const pages = document.querySelectorAll('.page');
        let currentPageIndex = 0;
        var currentBigBoxes = document.getElementsByClassName("big-box");
        var gfxFlickity;

        for (let i = 0; i < boxes.length; i++) {
            boxes[i].addEventListener('click', () => {
                
              if (currentBigBoxes.length === 0) {
                for (let j = 0; j < boxes.length; j++) {
                  if (!(boxes[i].isEqualNode(boxes[j]))) {
                    boxes[j].style.display = "none";
                  } else {
                    skillsText.innerHTML = `<span class='color-theme'>${headingss[i].textContent}</span>`;
                  }
                }
                for (let k = 0; k < headingss.length; k++) {
                  headingss[k].style.display = "none";
                }
                for (let l = 0; l < subWorkContainers.length; l++) {
                  subWorkContainers[l].style.display = "flex";
                }
                setTimeout(function() {
                    gfxFlickity = new Flickity(gfxWorkContainer, {
                        cellAlign: 'center',
                        contain: true,
                        wrapAround: true,
                        imagesLoaded: true,
                        autoPlay: 2000,
                        pageDots: false,
                        setGallerySize: false,
                        percentPosition: true,
                        resize: true
                    });
                }, 20);
                try {
                    gfxFlickity.resize();

                } catch {};

                boxes[i].classList.add("big-box");
                boxes[i].classList.remove("box");
                
                backArrow.style.display = "block";
              };
            });
          };
        

        window.dispatchEvent(new Event('resize'));
        gfxWorkContainer.addEventListener('autoplayStart', function() {
            gfxFlickity.resize();
        });
        gfxWorkContainer.style.height = gfxWorkContainer.clientHeight + "px";
        

        backArrow.addEventListener('click', () => {
            var currentBigBoxes = document.getElementsByClassName("big-box");

            skillsText.innerHTML = "My<span class='color-theme'> Work</span>";
            for (let i = 0; i < currentBigBoxes.length; i++) {
                currentBigBoxes.item(i).classList.add("box");
                currentBigBoxes.item(i).classList.remove("big-box");
            };
            for (let i = 0; i < boxes.length; i++) {
                boxes[i].style.display = "flex";
                boxes[i].classList.add("box");
                boxes[i].classList.remove("big-box");
            };
            for (let k = 0; k < headingss.length; k++) {
                headingss[k].style.display = "block";
            };
            for (let l = 0; l < subWorkContainers.length; l++) {
                subWorkContainers[l].style.display = "none";
            };
            backArrow.style.display = "none";
        });

        navArrow.addEventListener('click', () => {

            navArrow.style.animation = 'fade-out 1s cubic-bezier(0.2, 0, 0.190, 1) forwards';


            for (let i = currentPageIndex; i >= 0; i--) {
              pages[i].style.animation = 'slide-up 2s cubic-bezier(0.2, 0, 0.190, 1) forwards';
              
            }
            // navArrow.style.opacity = "0";
            
            setTimeout(() => {
              navArrow.style.display = 'none';

              for (let i = currentPageIndex; i >= 0; i--) {
                pages[i].classList.remove('active');
              }

              currentPageIndex = (currentPageIndex + 1) % pages.length;
              pages[currentPageIndex].classList.add('active');
              for (let i = currentPageIndex; i >= 0; i--) {
                // if (pages[i].id.localeCompare("page1")) {
                //     navArrowContainer.style.marginTop = "-180px";
                //     mainContainer.style.top = "0px";
                // }
                // else {
                //     if (pages[i].id.localeCompare("page2")) {
                //         navArrowContainer.style.marginTop = "200px";
                //     };
                //     if (pages[i].id.localeCompare("page3")) {
                //         navArrowContainer.style.marginTop = "100px";
                //     };
                // };
                // console.log(pages[i].id);
                
                pages[i].style.animation = 'slide-up2 2s cubic-bezier(0.2, 0, 0.190, 1) forwards';
              };
              setTimeout(() => {
                navArrow.style.display = 'flex';
                navArrow.style.animation = 'fade-in 1s cubic-bezier(0.2, 0, 0.190, 1) forwards';
                // navArrow.style.opacity = '1';
                
              }, 1000);
            }, 800);
          });

        lightThemeIcon.style.visibility = "hidden";
        setTimeout( function() {
            lightThemeIcon.style.visibility = "visible";
            lightThemeIcon.animate([
                {right: "-10%"},
                {right: "5%"}
            ], {
                duration: 1700,
                iterations: 1,
                easing : "cubic-bezier(0.2, 0, 0.190, 1)"
            })
        }, 2000);
        
        // go here
        animateElement(heading, 0, 1.7)
        animateElement(subHeading, 1.7, 1.7)
        animateElement(divider, 3.6, 1.7)
        animateElement(bio, 5, 2)
        animateElement(divider2, 6.8, 1.7)
        animateElement(socialLogoContainer, 7.8, 1.5)
        animateImage(image, 2, 2)
        animateNavArrow(navArrow, 8, 1)

        // mainContainer.style.maxWidth = window.screen.width;
        // mainContainer.style.maxHeight = window.screen.height;

        lightThemeIcon.onclick = function(e) {
            
            if (lightMode === true) {
                return
            }
            var duration = 1500;
            var elementsToAnimate = [heading, subHeading, bio, divider, divider2, aboutMe, aboutMeText, skillsText];
            lightThemeIcon.animate([
                {right: "5%"},
                {right: "-10%"}
            ],{
                duration: 1000,
                iterations: 1,
                easing: "cubic-bezier(0.2, 0, 0.190, 1)"
            })
            setTimeout( function () {
                lightThemeIcon.style.visibility = "hidden";
                darkThemeIcon.style.visibility = "visible";
                darkThemeIcon.animate([
                    {right: "-10%"},
                    {right: "5%"}
                ],{
                    duration: 1000,
                    iterations: 1,
                    easing: "cubic-bezier(0.2, 0, 0.190, 1)"
                })
            }, 1000)
            
            wave.animate([
                {mixBlendMode: "add",
                opacity: "80%"},
                {mixBlendMode: "multiply",
            opacity: "40%"}
            ], {
                duration: duration,
                iterations: 1,
                easing : "cubic-bezier(0.2, 0, 0.190, 1)"
            })
            wave.style.mixBlendMode = "multiply";
            wave.style.opacity = "40%";
            spotBlur.animate([
                {backgroundColor: "rgb(45, 115, 255)",
                opacity: "50%"    
            },
                {backgroundColor: "rgb(2, 149, 255)",
                opacity: "15%"
            },
            ],{
                duration: duration,
                iterations: 1,
                easing : "cubic-bezier(0.2, 0, 0.190, 1)"
            })
            
            spotBlur.style.backgroundColor = "rgb(2, 149, 255)";
            spotBlur.style.opacity = "15%";

            // text.animate([
            //     {
            //         color: "#e5e3e0",
            //         color: "rgb(34, 34, 34)"
            //     }
            // ], {
            //     duration: duration,
            //     iterations: 1,
            //     easing : "cubic-bezier(0.2, 0, 0.190, 1)"
            // });
            // text.style.color = "rgb(34, 34, 34)";

            elementsToAnimate.forEach( function(element) {
                if (element === divider || element === divider2) {
                    element.animate([
                        {borderTop: "0.3vh solid rgb(218, 218, 218)"},
                        {color: "0.3vh solid rgb(34, 34, 34)"}
                    ], {
                        duration: duration,
                        iterations: 1,
                        easing : "cubic-bezier(0.2, 0, 0.190, 1)"
                    });
                    element.style.borderTop = "0.3vh solid rgb(34, 34, 34)";
                    
                }
                if (element === skillHeadings) {
                    for (let i = 0; i < skillHeadings.length; i++) {
                        skillHeadings[i].animate([ 
                            {color: "#e5e3e0"},
                            {color: "rgb(34, 34, 34)"}
                        ], {
                            duration: duration,
                            iterations: 1,
                            easing : "cubic-bezier(0.2, 0, 0.190, 1)"
                        });
                        skillHeadings[i].style.color = "rgb(34, 34, 34)";
                    };
                }
                else  {
                    element.animate([
                        {color: "#e5e3e0"},
                        {color: "rgb(34, 34, 34)"}
                    ], {
                        duration: duration,
                        iterations: 1,
                        easing : "cubic-bezier(0.2, 0, 0.190, 1)"
                    });
                    element.style.color = "rgb(34, 34, 34)";
                }
                
            })
            
            document.body.animate([
                {backgroundColor: "rgb(34, 34, 34)"},
                {backgroundColor: "#fefffc"}
            ], {
                duration: duration,
                iterations: 1,
                easing : "cubic-bezier(0.2, 0, 0.190, 1)"
            });
            setTimeout(function() {
                document.body.style.backgroundColor = "#fefffc"
            }, duration);
            lightMode = true;
            darkMode = false;
        };

        darkThemeIcon.onclick = function(e) {
            
            if (darkMode === true) {
                return
            }
            var duration = 1500;
            var elementsToAnimate = [heading, subHeading, bio, divider, divider2, aboutMe, aboutMeText, skillsText];
            darkThemeIcon.animate([
                {right: "5%"},
                {right: "-10%"}
            ],{
                duration: 1000,
                iterations: 1,
                easing: "cubic-bezier(0.2, 0, 0.190, 1)"
            })
            setTimeout( function () {
                darkThemeIcon.style.visibility = "hidden";
                lightThemeIcon.style.visibility = "visible";
                lightThemeIcon.animate([
                    {right: "-10%"},
                    {right: "5%"}
                ],{
                    duration: 1000,
                    iterations: 1,
                    easing: "cubic-bezier(0.2, 0, 0.190, 1)"
                })
            }, 1000)
            
            wave.animate([
                {mixBlendMode: "multiply",
                opacity: "40%"},
                {mixBlendMode: "add",
                opacity: "80%"}
            ], {
                duration: duration,
                iterations: 1,
                easing : "cubic-bezier(0.2, 0, 0.190, 1)"
            })
            wave.style.mixBlendMode = "add";
            wave.style.opacity = "80%";
            spotBlur.animate([
                {backgroundColor: "rgb(2, 149, 255)",
                opacity: "15%"    
            },
                {backgroundColor: "rgb(45, 115, 255)",
                opacity: "50%"
            },
            ],{
                duration: duration,
                iterations: 1,
                easing : "cubic-bezier(0.2, 0, 0.190, 1)"
            })
            
            spotBlur.style.backgroundColor = "rgb(45, 115, 255)";
            spotBlur.style.opacity = "50%";

            // text.animate([
            //     {
            //         color: "rgb(34, 34, 34)",
            //         color: "#e5e3e0"
            //     }
            // ], {
            //     duration: duration,
            //     iterations: 1,
            //     easing : "cubic-bezier(0.2, 0, 0.190, 1)"
            // });
            // text.style.color = "#e5e3e0";

            elementsToAnimate.forEach( function(element) {
                if (element === divider || element === divider2) {
                    element.animate([
                        {borderTop: "0.3vh solid rgb(34, 34, 34)"},
                        {color: "0.3vh solid rgb(218, 218, 218)"}
                    ], {
                        duration: duration,
                        iterations: 1,
                        easing : "cubic-bezier(0.2, 0, 0.190, 1)"
                    });
                    element.style.borderTop = "0.3vh solid rgb(218, 218, 218)";
                    
                }
                if (element === skillHeadings) {
                    for (let i = 0; i < skillHeadings.length; i++) {
                        skillHeadings[i].animate([ 
                            {color: "rgb(34, 34, 34)"},
                            {color: "#e5e3e0"}
                        ], {
                            duration: duration,
                            iterations: 1,
                            easing : "cubic-bezier(0.2, 0, 0.190, 1)"
                        });
                        skillHeadings[i].style.color = "#e5e3e0";
                    };
                }
                else  {
                    element.animate([
                        {color: "rgb(34, 34, 34)"},
                        {color: "#e5e3e0"}
                    ], {
                        duration: duration,
                        iterations: 1,
                        easing : "cubic-bezier(0.2, 0, 0.190, 1)"
                    });
                    element.style.color = "#e5e3e0";
                }
                
            })
            
            document.body.animate([
                {backgroundColor: "#fefffc"},
                {backgroundColor: "rgb(34, 34, 34)"}
            ], {
                duration: duration,
                iterations: 1,
                easing : "cubic-bezier(0.2, 0, 0.190, 1)"
            });
            setTimeout(function() {
                document.body.style.backgroundColor = "rgb(34, 34, 34)"
            }, duration);
            lightMode = false;
            darkMode = true;
        };


        document.body.onmousemove = function(e) {
            var x = e.clientX;
            var y = e.clientY;
            // console.log[x,y];

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
                    easing: "cubic-bezier(0.49, 0.47, 0.63, 0.85)",
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