/**
 * Created by david on 5/30/15.
 */

//module.exports = angular.module('app.components', [])
module.exports = angular.module('formlyExample.components', [])
    .directive('stepOne', require('./stepOne/stepOne'))
    .directive('stepTwo', require('./stepTwo/stepTwo'));
