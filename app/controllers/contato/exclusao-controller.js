(function () {
    'use strict';
    angular.module('myApp').controller('ContatoExclusaoCtrl',  ContatoExclusaoCtrl);

    ContatoExclusaoCtrl.$inject = ['$rootScope', '$routeParams', '$location', 'SETTINGS'];

    function ContatoExclusaoCtrl($rootScope, $routeParams, $location, SETTINGS) {
        var vm = this;
        var id = $routeParams.id;

        activate();

        function activate() {
            excluirContato();
        }

        function excluirContato() {
            angular.forEach($rootScope.contatos, function (value, key) {
                if (value.id == id) {
                    $rootScope.contatos.splice(key, 1);
                }
            });
            localStorage.removeItem(SETTINGS.CONTATOS);
            localStorage.setItem(SETTINGS.CONTATOS, angular.toJson($rootScope.contatos));
            $location.path('/contato');

        }
    };
})();