(function () {
    'use strict';
    angular.module('myApp').controller('ContatoDetalhamentoCtrl', ContatoDetalhamentoCtrl);

    ContatoDetalhamentoCtrl.$inject = ['$rootScope'];

    function ContatoConsultaCtrl($rootScope) {
        var vm = this;
        vm.contato = [];

        activate();

        function activate() {
            listarContatos();
        }

        function listarContatos() {

            vm.contato = [];
            vm.contato = $rootScope.contatos;

        }
    };
})();