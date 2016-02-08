/**
 * Created by George Kormaris on 2/7/2016.
 */

var nav = document.querySelector('.sticky-menu');
var bioTop = document.querySelector('#bio').getBoundingClientRect().top;

window.onscroll = function(e) {
  "use strict";
  if (window.scrollY >= bioTop) {
    nav.style.transform = "translateY(0)";
  } else {
    nav.style.transform = "translateY(-48px)";
  }
};


