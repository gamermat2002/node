const load = require('lodash');

const items = [1,[2,4,[3,[4,1,8,4]]]];

const newarr = load.flattenDeep(items);
console.log(newarr);