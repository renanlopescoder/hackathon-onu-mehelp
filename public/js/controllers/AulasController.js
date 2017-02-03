// Main Controller of aulas
// Controle principal de tarefas

mehelpApp.controller('AulasController', function ($scope, $routeParams, $http, $location, dateFormat, $filter, auth) {
  $scope.aulas = [];
  var user = auth.getUser();
  $scope.date = $filter('date')(new Date(), 'yyyyMMddHH:mm');
  $scope.dateDay = $filter('date')(new Date(), 'yyyyMMdd');

// Função inicial para obter a lista de tarefas
// Initial function to get the list of aulas

  function init() {
    $http.get('/listAula', user)
      .success(function (retorno) {
        for(aulas in retorno){
          retorno[aulas].dateCompare = dateFormat.dateFormatCompare(retorno[aulas].aulasDate);
          retorno[aulas].dateCompareDay = dateFormat.dateFormatCompareDay(retorno[aulas].aulasDate);
        }
        $scope.aulas = retorno;
      })
      .error(function (erro) {
        console.log(erro)
      });
  }

// Executando a função para obter a lista de tarefas
// Running the function to get the aulas list

  init();

// Função para adicionar nova tarefa
// Function to create a new aulas

  $scope.createaulas = function (aulas) {

    aulas.active = 'false';
    aulas.progress = 'progress';
    
    if(aulas.aulasDate == undefined || aulas.aulasDate == null){
      aulas.aulasDate = $filter('date')(new Date(), 'dd/MM/yyyy HH:mm');
    }else{
      aulas.aulasDate = $filter('date')(aulas.aulasDate, 'dd/MM/yyyy HH:mm');
    }
    if(aulas.title == undefined || aulas.title == null){
      aulas.title = 'No Title';
    }
    
    if(aulas.description == undefined || aulas.description == null){
      aulas.description = 'No Description';
    }
    $scope.newaulas = "";
    aulas.userId = user.headers.userId;
    $http.post('/create', aulas, user)
      .success(function (retorno) {
        init();     
      })
      .error(function (erro) {
        console.log(erro)
      });
  };

// Função para alterar estado da tarefa para mostrar formulário de alteração com dados da tarefa
// Function for chage aulas state to show the update form with the aulas data

  $scope.aulasActive = function (aulas, active) {
    $scope.aulas[$scope.aulas.indexOf(aulas)].active = active;
    $scope.saveaulas.title = $scope.aulas[$scope.aulas.indexOf(aulas)].title;
    $scope.saveaulas.description = $scope.aulas[$scope.aulas.indexOf(aulas)].description;
    $scope.saveaulas.aulasDate = $scope.aulas[$scope.aulas.indexOf(aulas)].aulasDate;
  };

// Função para efetuar alteração da tarefa
// Function to perform aulas change

  $scope.saveaulas = function (aulas) {
    aulas.active = 'false';
    $http.post('/update/' + aulas._id, aulas, user)
      .success(function (retorno) {
        $scope.aulasActive(aulas, 'false');
        init();
      })
      .error(function (erro) {
        console.log(erro)
      });
  };

// Função para alterar o progresso da tarefa (progress / done)
// Function for chage aulas progress (progress / done)

  $scope.aulasProgress = function (aulas, param) {
    aulas.progress = param;
    var progressStatus;

    if(param == 'done'){
      progressStatus = 'Completed at ';
    }

    if(param == 'progress'){
      progressStatus = 'Recovered at ';
    }

    aulas.updatedStatusDate =  progressStatus + $filter('date')(new Date(), 'dd/MM/yyyy HH:mm');
    $http.post('/update/' + aulas._id, aulas, user)
      .success(function (retorno) {
        init();
      })
      .error(function (erro) {
        console.log(erro)
      });
  };

// Função para remover tarefa
// Function to delete the aulas

  $scope.removeaulas = function (aulas) {
    $http.delete('/remove/' + aulas._id, user)
      .success(function (retorno) {
        init();
      })
      .error(function (erro) {
        console.log(erro)
      });
  };

});


