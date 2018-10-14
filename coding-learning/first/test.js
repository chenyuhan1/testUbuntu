// map
var _ = require('underscore');
console.log(_.map([1, 2, 3], function (num) {
    return num * num;
}));

// reduce 
var _ = require('underscore');
var sum = _.reduce([1, 2, 3], function (memo, num) {
    console.log(memo, num);
    return memo+num;
}, 0);
console.log(sum);