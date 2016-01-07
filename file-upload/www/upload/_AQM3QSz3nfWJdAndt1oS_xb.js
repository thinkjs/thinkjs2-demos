//循环体内有function

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();


var fn1 = function(name){
  if (name === undefined) {

  };
}

var fn2 = function(name){
    if (arguments.length === 0) {

    };
}
suite.add('undefined', function (defer) {
   fn1();
   fn1("welefen");
   defer.resolve();
}, {
  defer: true
}).add('arguments', function (defer) {
   fn2();
   fn2("welefen");
   defer.resolve();
}, {
  defer: true
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });