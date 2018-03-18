
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "meals"; ALTER SEQUENCE meals_id_seq RESTART WITH 4;')
    .then(function () {
      var meal = [{
        id: 1,
        mealName: 'Tuna Noodle Casserole',
        mealPic: '/static/tnc.png',
        instructionsLink: 'https://www.campbells.com/kitchen/recipes/classic-tuna-noodle-casserole/',
        funIdeas: 'Substitute crunched potato chips on top for bread cumbs.',
        i1: '1 can cream of celery soup',
        i2: '1/2 cup milk',
        i3: '1 cup frozen peas',
        i4: '2 cans tuna',
        i5: '4 oz egg noodles',
        i6: '2 tbsp bread crumbs',
        i7: '1 tbsp butter',
        i8: '2 tbsp chopped pimiento',
        i9: '',
        i10: '',
        i11: '',
        i12: '',
        i13: '',
        i14: '',
        i15: ''
      },{
        id: 2,
        mealName: 'BLTs',
        mealPic: '/static/blt.png',
        instructionsLink: 'http://www.geniuskitchen.com/recipe/classic-blt-sandwich-129615',
        funIdeas: 'Add avocado, use spicy mayo or substitute the mayo for hummus.',
        i1: '1/2 lb bacon',
        i2: 'bread',
        i3: '1 head iceberg lettuce',
        i4: '2 large tomatoes',
        i5: 'mayonaise',
        i6: '',
        i7: '',
        i8: '',
        i9: '',
        i10: '',
        i11: '',
        i12: '',
        i13: '',
        i14: '',
        i15: ''
      },{
        id: 3,
        mealName: 'Egg Salad Sandwiches',
        mealPic: '/static/ess.png',
        instructionsLink: 'https://www.foodnetwork.com/recipes/tyler-florence/egg-salad-sandwich-with-avocado-and-watercress-recipe-1915683',
        funIdeas: 'Use a thick sliced, soft bread like Ciabatta.',
        i1: '6 eggs',
        i2: '1/4 cup mayonaise',
        i3: '1 tsp dijon mustard',
        i4: '1/2 lemon',
        i5: 'bread',
        i6: '1 avocado',
        i7: '1/2 bunch watercress',
        i8: '',
        i9: '',
        i10: '',
        i11: '',
        i12: '',
        i13: '',
        i14: '',
        i15: ''
      }]
      return knex('meals').insert(meal)
    })
};
