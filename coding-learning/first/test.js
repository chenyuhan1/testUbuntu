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

var founders = new Map();
founders.set('facebook', 'mark');
founders.set('google', 'larry');
founders.size;
founders.get('twitter');
founders.has('yahoo');
for (let [key, value] of founders) {
    console.log(key + ' founded by ' + value);
}
