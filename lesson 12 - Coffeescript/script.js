// Generated by CoffeeScript 1.8.0
(function() {
  var Food, Vegetables, a, array, days, destination, doublePlusOne, months, num, person, rain, showRainbow, snowy, start, sunny, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  num = 2;

  a = "apple";

  person = {
    fullName: {
      firstName: "John",
      lastName: "Doe"
    },
    occupation: "Web Developer"
  };

  array = [1, 2, 3];

  months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  days = [31, 30, 29, 28, 27];

  doublePlusOne = function(num) {
    var answer;
    answer = num * 2 + 1;
    return "The answer is " + answer;
  };

  doublePlusOne(4);

  sunny = true;

  rain = false;

  snowy = true;

  showRainbow = function() {
    return "Look! There is a rainbow";
  };

  if (sunny && rain) {
    showRainbow;
  }

  if (sunny === true || snowy === true) {
    "It's snowy or sunny";
  }

  Food = (function() {
    var _class;

    function Food() {
      return _class.apply(this, arguments);
    }

    _class = Food.name;

    Food.prototype.shoutout = function() {
      return "Lovely food!";
    };

    return Food;

  })();

  Vegetables = (function(_super) {
    __extends(Vegetables, _super);

    function Vegetables() {
      return Vegetables.__super__.constructor.apply(this, arguments);
    }

    Vegetables.prototype.shoutout = function() {
      return "Lovely vegetables!";
    };

    return Vegetables;

  })(Food);

  start = "Earth";

  destination = "Moon";

  _ref = [destination, start], start = _ref[0], destination = _ref[1];

}).call(this);

//# sourceMappingURL=script.js.map
