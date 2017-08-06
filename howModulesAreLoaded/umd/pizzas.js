(function(root, factory){
  if (typeof define === "function" && define.amd) {
    define(['./recipes.js'], factory);
  } else if (typeof exports === 'object') {
    factory(require('./recipes.js'));
  } else {
    root.pizzas = factory(root.recipes);
  }
}(this, function (recipes) {
  return function(name) {
    const recipe = recipes[name];
    console.log('Pizza ' + name + ' recipe', recipe);
  }
}))
