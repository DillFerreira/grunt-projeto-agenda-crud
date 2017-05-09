(function () {
    'use strict';
    angular.module('myApp').controller('ContatoAlteracaoCtrl', ContatoAlteracaoCtrl);

    ContatoAlteracaoCtrl.$inject = ['$rootScope', '$routeParams', '$location', 'SETTINGS'];

    function ContatoAlteracaoCtrl($rootScope, $routeParams, $location, SETTINGS) {
        var vm = this;
        var id = $routeParams.id;

        ctrl.contato = {};

        ctrl.salvar = salvar;

        activate();

        function activate() {
            listarContato();
        }

        function listarContato() {
            angular.forEach($rootScope.contatos, function (value, key) {
                if (value.id == id) 
                {
                    vm.contato = value;
                }
            });
        }

        function salvar() {
            angular.forEach($rootScope.contatos, function (value, key) {
                if (value.id == id) {
                    $rootScope.contatos[key] = value;                    
                }
            });
            localStorage.removeItem(SETTINGS.CONTATOS);
            localStorage.setItem(SETTINGS.CONTATOS, angular.toJson($rootScope.contatos));
            $location.path('/contatos');
        }
    };
})();