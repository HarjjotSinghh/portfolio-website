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
          
        // mainContainer.style.width = `${window.innerWidth}px`;
        // mainContainer.style.height = `${window.innerHeight}px`;
        // mainContainer.style.maxWidth = `${window.innerWidth}px`;
        // mainContainer.style.maxHeight = `${window.innerHeight}px`;

        const pages = document.querySelectorAll('.page');
        let currentPageIndex = 0;

        // const workContainer = document.getElementById('work-container');
        // const boxes = document.querySelectorAll('.box');
        // const backArrow = document.querySelector('.back-arrow');
        // const originalBoxRects = [];
        // const originalBoxStyles = [];

        // boxes.forEach((box) => {
        //     // Store the original size and position of the boxes
        //     originalBoxRects.push(box.getBoundingClientRect());
        //     originalBoxStyles.push({
        //       position: box.style.position,
        //       top: box.style.top,
        //       left: box.style.left,
        //       width: box.style.width,
        //       height: box.style.height,
        //     });
          
        //     box.addEventListener('click', () => {
        //       // Animate the selected box to its big size and position
        //       const boxRect = box.getBoundingClientRect();
        //       const containerRect = workContainer.getBoundingClientRect();
        //       const bigBoxRect = {
        //         top: boxRect.top - containerRect.top + 'px',
        //         left: boxRect.left - containerRect.left + 'px',
        //         width: containerRect.width + 'px',
        //         height: containerRect.height + 'px',
        //       };
          
        //       box.animate(
        //         [
        //           {
        //             top: boxRect.top - containerRect.top + 'px',
        //             left: boxRect.left - containerRect.left + 'px',
        //             width: boxRect.width + 'px',
        //             height: boxRect.height + 'px',
        //           },
        //           bigBoxRect,
        //         ],
        //         {
        //           duration: 500,
        //           easing: 'ease-in-out',
        //           fill: "forwards"
        //         }
        //       ).onfinish = () => {
        //         // Bring the selected box to the front
        //         box.style.zIndex = '1';
        //         box.classList.add('big');
          
        //         // Show the back arrow and add styles for the big container
        //         workContainer.classList.add('big');
        //       };
        //     });
        //   });
          
        //   backArrow.addEventListener('click', () => {
        //     boxes.forEach((box, index) => {
        //       // Animate the boxes back to their original sizes and positions
        //       const boxStyle = window.getComputedStyle(box);
        //       const boxRect = originalBoxRects[index];
          
        //       box.animate(
        //         [
        //           {
        //             top: boxStyle.top,
        //             left: boxStyle.left,
        //             width: boxStyle.width,
        //             height: boxStyle.height,
        //           },
        //           {
        //             top: boxRect.top - workContainer.getBoundingClientRect().top + 'px',
        //             left: boxRect.left - workContainer.getBoundingClientRect().left + 'px',
        //             width: boxRect.width + 'px',
        //             height: boxRect.height + 'px',
        //           },
        //         ],
        //         {
        //           duration: 500,
        //           easing: 'ease-in-out',
        //         }
        //       ).onfinish = () => {
        //         // Reset the box styles to their original values
        //         box.style.position = originalBoxStyles[index].position;
        //         box.style.top = originalBoxStyles[index].top;
        //         box.style.left = originalBoxStyles[index].left;
        //         box.style.width = originalBoxStyles[index].width;
        //         box.style.height = originalBoxStyles[index].height;
          
        //         box.classList.remove('big');
        //       };
        //     });
          
        //     // Remove the styles added for the big container
        //     workContainer.classList.remove('big');
        //   });

          

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

        // if (window.screen.width > window.screen.height) {
        //     divider2.style.left = `${y[1]}px`;
        //     divider2.style.top = `calc(${y[0]}px)`;
        //     socialLogo.style.height = "8vh";
        //     socialLogo.style.width = "auto";
        //     socialLogo2.style.height = "8vh";
        //     socialLogo2.style.width = "auto";
        //     socialLogo3.style.height = "8vh";
        //     socialLogo3.style.width = "auto";
        //     socialLogo2.style.marginLeft = "10vh";
        //     socialLogo3.style.marginLeft = "20vh";

        //     lightThemeIcon.style.height = "8vh";
        //     lightThemeIcon.style.width = "8vh";
        //     darkThemeIcon.style.height = "8vh";
        //     darkThemeIcon.style.width = "8vh";
        //     // sunIcon.style.height = "5vh";
        //     // sunIcon.style.width = "5vh";

        //     spotBlur.style.height = "35vh";
        //     spotBlur.style.width = "35vh";
        // } else if (window.screen.height > window.screen.width) {
        //     if ((window.screen.height - window.screen.width) > 300) {
        //         heading.style.top = "23%";
        //         divider.style.top = "36%";
        //         bio.style.top = "35%";
        //         divider2.style.top = "51%"
        //     }

        //     socialLogo.style.height = "auto";
        //     socialLogo.style.width = "8vw";
        //     socialLogo2.style.height = "auto";
        //     socialLogo2.style.width = "8vw";
        //     socialLogo3.style.height = "auto";
        //     socialLogo3.style.width = "8vw";
        //     socialLogo2.style.marginLeft = "10vw";
        //     socialLogo3.style.marginLeft = "20vw";

        //     lightThemeIcon.style.height = "8vw";
        //     lightThemeIcon.style.width = "8vw";
        //     darkThemeIcon.style.height = "8vw";
        //     darkThemeIcon.style.width = "8vw";
        //     // sunIcon.style.height = "5vw";
        //     // sunIcon.style.width = "5vw";

        //     spotBlur.style.height = "35vw";
        //     spotBlur.style.width = "35vw";
        // }

        // // if (window.screen.width > window.screen.height) {
        // //     divider.style.width = `calc(${window.screen.width * 0.3})`;
        // //     divider2.style.width = `calc(${window.screen.width * 0.3})`;
        // // } else if (window.screen.height > window.screen.width) {
        // //     divider.style.width = `calc(${window.screen.width * 0.5})`;
        // //     divider2.style.width = `calc(${window.screen.width * 0.5})`;
        // // }
        
        // showText('heading-text', 0.2)
        // showText('sub-heading-text', 1.85);
        // showText('light-mode-icon', 2.25)
        // showText('divider', 3.5);
        // showText('bio', 4.3);
        // showText('social-logo', 5.8);
        // showText('social-logo2', 5.8);
        // showText('social-logo3', 5.8);
        // showText('divider2', 5.8);

        
        
        
        // socialLogoContainer.style.left = `${y[1]}px`;
        // socialLogoContainer.style.top = `calc(${y[0]}px + 2.5vh)`;
        // var twitterCoords_ = socialLogo.getBoundingClientRect();
        // var twitterCoords = [twitterCoords_.top, twitterCoords_.left];
        // // socialLogo2.style.left = `calc(${twitterCoords[1]}px + 10vh)`;
        // // socialLogo2.style.top = `calc(${twitterCoords[0]}px)`;
        

        // // document.getElementById("sub-heading-text").animate(
        // //     [
        // //     {
        // //         "left": "-70%",
        // //     },
        // //     {
        // //         "left": "8%",
        // //     }
        // // ], {
        // //     duration: 2000,
        // //     iterations:1,
        // //     delay: 1700,
        // //     easing: "cubic-bezier(0.23, 1, 0.320, 1)",
        // // }
        // // );
        // // document.getElementById("sub-heading-text").style.left = "8%";
        
        

        // window.onresize = function(e) {
        //     var x = bio.getBoundingClientRect();
        //     var y = [x.bottom, x.left]
        //     var twitterCoords_ = socialLogo.getBoundingClientRect();
        //     var twitterCoords = [twitterCoords_.top, twitterCoords_.left];
            
        //     // console.log(y);
        //     // var a = socialLogo.getBoundingClientRect();
        //     // var b = [a.bottom, a.left];
        //     socialLogoContainer.style.left = `${y[1]}px`;
        //     socialLogoContainer.style.top = `calc(${y[0]}px + 2.5vh)`;
        //     // console.log(socialLogo.style.top);
        //     divider2.style.left = `${y[1]}px`;
        //     divider2.style.top = `calc(${y[0]}px)`;
        //     // socialLogo2.style.left = `calc(${twitterCoords[1]}px + 10vh)`;
        //     // socialLogo2.style.top = `calc(${twitterCoords[0]}px)`;


        //     if (window.screen.width > window.screen.height) {
        //         divider2.style.left = `${y[1]}px`;
        //         divider2.style.top = `calc(${y[0]}px)`;
        //         socialLogo.style.height = "8vh";
        //         socialLogo.style.width = "auto";
        //         socialLogo2.style.height = "8vh";
        //         socialLogo2.style.width = "auto";
        //         socialLogo3.style.height = "8vh";
        //         socialLogo3.style.width = "auto";
        //         socialLogo2.style.marginLeft = "10vh";
        //         socialLogo3.style.marginLeft = "20vh";

        //         lightThemeIcon.style.height = "8vh";
        //         lightThemeIcon.style.width = "8vh";
        //         darkThemeIcon.style.height = "8vh";
        //         darkThemeIcon.style.width = "8vh";
        //         // sunIcon.style.height = "5vh";
        //         // sunIcon.style.width = "5vh";

        //         spotBlur.style.height = "35vh";
        //         spotBlur.style.width = "35vh";
            
        //     } else if (window.screen.height > window.screen.width) {
        //         if ((window.screen.height - window.screen.width) > 300) {
        //             heading.style.top = "23%";
        //             divider.style.top = "36%";
        //             bio.style.top = "35%";
        //             divider2.style.top = "51%"
        //         } 
                
        //         socialLogo.style.height = "auto";
        //         socialLogo.style.width = "8vw";
        //         socialLogo2.style.height = "auto";
        //         socialLogo2.style.width = "8vw";
        //         socialLogo3.style.height = "auto";
        //         socialLogo3.style.width = "8vw";
        //         socialLogo2.style.marginLeft = "10vw";
        //         socialLogo3.style.marginLeft = "20vw";

        //         lightThemeIcon.style.height = "8vw";
        //         lightThemeIcon.style.width = "8vw";
        //         darkThemeIcon.style.height = "8vw";
        //         darkThemeIcon.style.width = "8vw";
        //         // sunIcon.style.height = "5vw";
        //         // sunIcon.style.width = "5vw";

        //         spotBlur.style.height = "35vw";
        //         spotBlur.style.width = "35vw";
        //     }

        //     // if (window.screen.width > window.screen.height) {
        //     //     divider.style.width = "30%";
        //     //     divider2.style.width = "30%";
        //     // } else if (window.screen.height > window.screen.width) {
        //     //     divider.style.width = "50%";
        //     //     divider2.style.width = "50%";
        //     // }

        // }

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