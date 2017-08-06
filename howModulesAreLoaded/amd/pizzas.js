define('pizzas', ['./recipes'], function(recipes) {
  return function(name) {
    const recipe = recipes[name];
    console.log('Pizza ' + name + ' recipe', recipe);
  };
});
