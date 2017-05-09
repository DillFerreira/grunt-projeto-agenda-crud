(function () {
    'use strict';
    angular.module('myApp').controller('ContatoInclusaoCtrl', ContatoInclusaoCtrl);

    ContatoInclusaoCtrl.$inject = ['$rootScope', '$location', 'SETTINGS'];

    function ContatoInclusaoCtrl($rootScope, $location, SETTINGS) {
        var ctrl = this;
        var proximoId = 1;

        if ($rootScope.contatos.length > 0) {
            proximoId = $rootScope.contatos[$rootScope.contatos.length - 1].id + 1;
        }

        ctrl.contato = {
            id: proximoId,
            nome: '',
            sobrenome: '',
            telefone: '',
            apelido: '',
            Dcad: 0            
        };
        ctrl.salvar = salvar;

        activate();

        function activate() {
            
        }

   
        function salvar() {
            $rootScope.contatos.push(ctrl.contato);
            localStorage.removeItem(SETTINGS.CONTATOS);
            localStorage.setItem(SETTINGS.CONTATOS, angular.toJson($rootScope.contatos));
            $location.path('/contato');            
        }        
    };
})();