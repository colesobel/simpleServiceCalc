trig.factory("CalculatorFactory", function(){
  return {
    hypot: function (a, b) {
      return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
    }
  }

})
