(function () {
    'use strict';

    angular.module('myApp').constant('SETTINGS', {
        "CONTATOS": "contatos"
    });

    angular.module('myApp').run(function ($rootScope, SETTINGS) {
        var contatos = localStorage.getItem(SETTINGS.CONTATOS);

        $rootScope.contatos = [];
        
        if (contatos) {
            var items = angular.fromJson(contatos);
            angular.forEach(items, function (value) {
                $rootScope.contatos.push(value);
            });
        }

    });

})();