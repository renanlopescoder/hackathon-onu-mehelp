mehelpApp.controller('UserController', function($scope, $http, auth) {
  $scope.user = {};
  $scope.newUser = {};

  $scope.autenticar = function(){
    var user = $scope.user;
    console.log(user);
    //Usando Promisse
      $http.post('/autenticar', {username: user.username, password: user.password})
      .then(function(response){
        if(response.status == 200){
          window.localStorage.setItem('user', JSON.stringify(response.data));
          console.log('Logado com Sucesso ' + user.username);
          var token = auth.getUser();
          window.location = '/listAula';
        };
        if(response.status == 401){
          window.location = '/';
        }

      }, function (error){
        console.log(error);
        console.log('Usuario ou senha invalidos');
         $scope.user = {};
      });
  };

  $scope.createUser = function(){
    var newUser = $scope.newUser;
    $http.post('/createUser', newUser)
      .then(function(response){
        console.log('Usuario criado com sucesso '+newUser.username);
        $scope.newUser = {};
        location.reload();
      }, function (error){
        console.log(error);
        console.log('Erro de criação de usuário');
         $scope.newUser = {};
      });
  };

});
