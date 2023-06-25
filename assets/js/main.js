$(function() {
    "use strict";
    $(document).ready(function() {
        $(".animsition-overlay").animsition({
            inClass: 'overlay-slide-in-right',
            outClass: 'overlay-slide-out-right',
            inDuration: 1,
            outDuration: 1500,
            linkElement: '.animsition-link',
            loading: false,
            loadingParentElement: 'body',
            loadingClass: 'animsition-loading',
            loadingInner: '',
            timeout: false,
            timeoutCountdown: 5000,
            onLoadEvent: true,
            browser: ['animation-duration', '-webkit-animation-duration'],
            overlay: true,
            overlayClass: 'animsition-overlay-slide',
            overlayParentElement: 'body',
            transition: function(url) {
                window.location.href = url;
            }
        });
        $('body').on('animsition.outStart', function() {
            $('body').removeClass('active');
            $('body').addClass('out');
        })
        $('body').on('animsition.inEnd', function() {
            $('body').addClass('active');
            $('body').addClass('in');
            setTimeout(function() {
                $("body").addClass("anim");
            }, 1000);
            var interleaveOffset = 0.5;
            var mySwiper = new Swiper('.home-slider', {
                spaceBetween: 0,
                speed: 1500,
                autoplay: {
                    delay: 5000
                },
                autoHeight: true,
                watchSlidesProgress: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                on: {
                    progress: function() {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            var slideProgress = swiper.slides[i].progress;
                            var innerOffset = swiper.width * interleaveOffset;
                            var innerTranslate = slideProgress * innerOffset;
                            swiper.slides[i].querySelector(".slide-bg").style.transform = "translate3d(" + innerTranslate + "px, 0, 0)";
                        }
                    },
                    touchStart: function() {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            swiper.slides[i].style.transition = "";
                        }
                    },
                    setTransition: function(speed) {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            swiper.slides[i].style.transition = speed + "ms";
                            swiper.slides[i].querySelector(".slide-bg").style.transition = speed + "ms";
                        }
                    }
                }
            });
            var swiper = new Swiper('.testimonials-slider', {
                speed: 1200,
                autoplay: {
                    delay: 5000
                },
                spaceBetween: 30,
                loop: true,
                autoHeight: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            });
            var swiper = new Swiper('.about-slider', {
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: true,
                speed: 1400,
                freeMode: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                breakpoints: {
                    767: {
                        slidesPerView: 1
                    }
                }
            });
            var mySwiper = new Swiper(".portfolio-slider", {
                direction: "vertical",
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true
                },
                speed: 1300,
                parallax: true,
                autoplay: false,
                effect: "slide",
                mousewheel: {
                    sensitivity: 1
                }
            });
            var mySwiper = new Swiper(".portfolio-column-slider", {
                slidesPerView: 3,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                speed: 1300,
                parallax: true,
                freeMode: true,
                autoplay: false,
                breakpoints: {
                    999: {
                        slidesPerView: 2
                    },
                    767: {
                        slidesPerView: 1
                    }
                },
                mousewheel: {
                    sensitivity: 1
                }
            });
            var swiper = new Swiper('.portfolio-slider2', {
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: true,
                speed: 1400,
                autoplay: {
                    delay: 5000
                },
                freeMode: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                breakpoints: {
                    999: {
                        slidesPerView: 1
                    }
                }
            });

            function projectFilter() {
                var $gridt = $('.works');
                $gridt.isotope({
                    itemSelector: '.grid-item',
                    percentPosition: true
                });
                $('.filter-buttons').on('click', 'button', function() {
                    var filterValue = $(this).attr('data-filter');
                    $gridt.isotope({
                        filter: filterValue
                    });
                    $(this).addClass('active').siblings().removeClass('active');
                });
            };
            projectFilter();
        });
        $('.fixed-header').midnight();
        $(".menu-open").on("click", function() {
            $('.menu-open, .nav-container').addClass('active');
        });
        $(".menu-close").on("click", function() {
            $('.menu-open, .nav-container').removeClass('active');
        });
        $('.dropdown-open').on("click", function() {
            $(this).find('.dropdown').addClass('active');
            $('.nav-link').addClass('done');
            $('.dropdown-close').addClass('active');
        });
        $('.dropdown-close').on("click", function() {
            $('.dropdown').removeClass('active');
            $('.nav-link').removeClass('done');
            $('.dropdown-close').removeClass('active');
        });
    });
    $(document).on('mouseover', '.nav-bg-change', function() {
        $(this).addClass('active').siblings().removeClass('active')
    });
    var $containers = $('[data-animation]:not([data-animation-child]), [data-animation-container]');
    $containers.scrollAnimations();
    $(".fixed-header").headroom();
    $('.photo-popup').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 800,
            easing: 'cubic-bezier(.86, 0, .07, 1)',
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false
    });
    $('.to-top-btn, .scroll-btn').mPageScroll2id();
    var supports = (function() {
        var d = document.documentElement,
            c = "ontouchstart" in window || navigator.msMaxTouchPoints;
        if (c) {
            d.className += " touch";
            return {
                touch: true
            }
        } else {
            d.className += " no-touch";
            return {
                touch: false
            }
        }
    })();
    $('footer').footerReveal({
        shadow: false,
        zIndex: 1
    });
    $(".progress-zero").each(function() {
        $(this).find(".progress-full").animate({
            width: $(this).attr("data-progress")
        });
    });
});

// let button = document.getElementById("my-button")
// button.addEventListener('click', function() {
//     // Redirect the user to the desired link
//     alert("button works")
//     window.location.href = 'google.com'
//     // window.open('index.html','_blank')
//   });


// Load the YouTube iframe API
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create the YouTube player
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: '56ZqDIupjnw',
    events: {
      'onReady': onPlayerReady
    }
  });
}

// Handle the player ready event
function onPlayerReady(event) {
  var playerElement = document.getElementById('player');
  playerElement.addEventListener('click', function() {
    player.playVideo();
    playerElement.requestFullscreen();
  });
}
function playVideo() {
    alert("clicked")
    var videoId = "56ZqDIupjnw";
    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&rel=0&controls=0&showinfo=0";
    iframe.height = 200;
    iframe.width = 300;
    iframe.frameborder = 0;
    iframe.allowfullscreen = true;
    document.querySelector(".card").appendChild(iframe);
  }