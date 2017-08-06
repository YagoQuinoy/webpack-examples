var recipes = require('./recipes');

module.exports = function (name) {
  const recipe = recipes[name];
  console.log('Pizza ' + name + ' recipe', recipe);
}
