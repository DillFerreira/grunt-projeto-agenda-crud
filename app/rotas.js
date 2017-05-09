(function () {
    'use strict';

    angular.module('myApp').config(function ($routeProvider) {
        $routeProvider
            .when('/consulta', {
                controller: 'ContatoHomeCtrl',
                controllerAs: 'vm',
                templateUrl:'../paginas/index.html'
            })
            .when('/consulta', {
                controller: 'ContatoConsultaCtrl',
                controllerAs: 'vm',
                templateUrl: '../paginas/consulta.html'
            })
            .when('/cadastro', {
                controller: 'ContatoCadastroCtrl',
                controllerAs: 'vm',
                templateUrl: '../paginas/cadastro.html'
            })
            .when('/alteracao,:id', {
                controller: 'ContatoAlteracaoCtrl',
                controllerAs: 'vm',
                templateUrl: '../paginas/alteracao.html'
            })
            .when('/exclusao/:id', {
                controller: 'ContatoExclusaoCtrl',
                controllerAs: 'vm',
                templateUrl: '../paginas/exclusao.html'
            });
            .when('/detalhamento/:id', {
                controller: 'ContatoDetalhamentoCtrl',
                controllerAs: 'vm',
                templateUrl: 'paginas/detalhamento.html'
            });
    });
})();