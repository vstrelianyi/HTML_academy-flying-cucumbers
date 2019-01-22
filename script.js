"use strict";

var ScreenSize = {
  WIDTH: 800,
  HEIGHT: 600
};

var setup = function() {
  var DROPS = 600;
  var canvas = document.querySelector("#playground");
  var ctx = canvas.getContext("2d");

  canvas.width = ScreenSize.WIDTH;
  canvas.height = ScreenSize.HEIGHT;
};

setup();
