
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "grocers"; ALTER SEQUENCE grocers_id_seq RESTART WITH 4;')
    .then(function () {
      var grocer = [{
        id: 1,
        grocerName: 'King Soopers',
        grocerPic: 'http://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_standard/public/uploads/2016/06/king-soopers-logo.png',
        grocerLink: 'https://www.kingsoopers.com/stores/details/620/00115?cid=loc62000115_gmb',
        grocerZip: 80202,
        other: 'My Favorite Grocer'
      },{
        id: 2,
        grocerName: 'Whole Foods Market',
        grocerPic: 'https://www.wholefoodsmarket.com/sites/default/files/media/Whole%20Foods%20Logo_1.JPG',
        grocerLink: 'https://www.wholefoodsmarket.com/stores/unionstation',
        grocerZip: 80202,
        other: 'My Second Favorite Grocer'
      },{
        id: 3,
        grocerName: 'Fresh Start Produce',
        grocerPic: 'http://www.freshstartproducetoo.com/WordPress/wp-content/uploads/2016/02/Fresh_Start_Produce_Too-LOGO.png',
        grocerLink: 'http://www.freshstartproducetoo.com/',
        grocerZip: 80216,
        other: 'Limited selection, but a great community grocer.'
      }]
      return knex('grocers').insert(grocer)
    })
}
