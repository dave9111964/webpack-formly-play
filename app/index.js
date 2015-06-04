/**
 * Created by david on 5/29/15.
 */

/* global angular */
(function() {

    'use strict';
    require('./vendor')();

    var app = angular.module('formlyExample', [
        'formly',
        'formlyBootstrap',
        require('./components/components').name
    ]);

    angular.element(document).ready(function(){
        angular.bootstrap(document.getElementById("ngapp"), ["formlyExample"]);
    });

    require('./components/ng2play/ng2app');

})();
