
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
        grocerName: 'Vitamin Cottage',
        grocerPic: 'https://static1.squarespace.com/static/581e5ad846c3c40f0614e4c7/t/582b56d7e6f2e1c6c87bdb56/1479235287585/NG+Logo.png',
        grocerLink: 'https://www.naturalgrocers.com/',
        grocerZip: 80216,
        other: 'Limited selection, but a great community grocer.'
      }]
      return knex('grocers').insert(grocer)
    })
}
