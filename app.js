(function () {
    angular.module('MenuApp')
      .controller('CategoriesController', CategoriesController)
      .controller('ItemsController', ItemsController);
  
    CategoriesController.$inject = ['categories'];
    function CategoriesController(categories) {
      var categoriesCtrl = this;
      categoriesCtrl.categories = categories;
    }
  
    ItemsController.$inject = ['items'];
    function ItemsController(items) {
      var itemsCtrl = this;
      itemsCtrl.items = items;
    }
  })();