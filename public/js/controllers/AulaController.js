mehelpApp.controller('AulaController', function ($scope, $routeParams, $http, $location, dateFormat, $filter, auth) {
  $scope.aulas = [];
  var user = auth.getUser();

  $scope.mensagem = '';
  $scope.filtro = '';

  $http.get('/listAula', user)
	.success(function(retorno) {
		console.log(retorno);
		$scope.aulas = retorno; 
	})
	.error(function(erro) {
		console.log(erro);
		console.log(user.username);
	});





});