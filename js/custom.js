/*

Template: Car Dealer - The Best Car Dealer Automotive Responsive HTML5 Template
Author: potenzaglobalsolutions.com
Version: 1.0  
Design and Developed by: potenzaglobalsolutions.com

NOTE:  

*/



/*================================================
[  Table of contents  ]
================================================

:: Predefined Variables
:: Preloader
:: Mega menu
:: Search Bar
:: Owl carousel
:: Counter
:: Slider range
:: Countdown
:: Tabs
:: Accordion
:: List group item
:: Slick slider 
:: Mgnific Popup
:: PHP contact form 
:: Placeholder
:: Isotope
:: Scroll to Top
:: POTENZA Window load and functions

======================================
[ End table content ]
======================================*/
 
//POTENZA var
var POTENZA = {};
 
 (function($){
  "use strict";


/*************************
      Predefined Variables
*************************/ 
var $window = $(window),
	$document = $(document),
	$body = $('body'),
  $fullScreen = $('.fullscreen') || $('.section-fullscreen'),
  $halfScreen = $('.halfscreen');

//Check if function exists
$.fn.exists = function () {
	return this.length > 0;
};


/*************************
     Full Screen
*************************/

  POTENZA.screenSizeControl = function () {
        if ($fullScreen.exists()) {

            $fullScreen.each(function () {
                var $elem = $(this),
                    elemHeight = $window.height();

                if($window.width() < 768 ) $elem.css('height', elemHeight/ 0.9);
                else $elem.css('height', elemHeight);
            });
        }
        if ($halfScreen.exists()) {
            $halfScreen.each(function () {
                var $elem = $(this),
                    elemHeight = $window.height();

                $elem.css('height', elemHeight / 1.5);
            });
        }
    };

/****************************************************
     POTENZA Window load and functions
****************************************************/

  //Window load functions
    $window.load(function () {
        
    });

   $window.resize(function() {
       POTENZA.screenSizeControl();
    });

 //Document ready functions
    $document.ready(function () {
        POTENZA.screenSizeControl();
    });


})(jQuery);

