(function () {
    angular.module('MenuApp')
      .config(RoutesConfig);
  
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
  
      $stateProvider
        .state('home', {
          url: '/',
          template: '<h1>Welcome to our Restaurant</h1>'
        })
        .state('categories', {
          url: '/categories',
          templateUrl: 'categories.template.html',
          controller: 'CategoriesController as categoriesCtrl',
          resolve: {
            categories: ['MenuDataService', function (MenuDataService) {
              return MenuDataService.getAllCategories()
                .then(function (response) {
                  return response.data;
                });
            }]
          }
        })
        .state('items', {
          url: '/items/{categoryShortName}',
          templateUrl: 'items.template.html',
          controller: 'ItemsController as itemsCtrl',
          resolve: {
            items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
                .then(function (response) {
                  return response.data;
                });
            }]
          }
        });
    }
  })();