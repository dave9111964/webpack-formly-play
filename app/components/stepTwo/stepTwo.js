/**
 * Created by david on 5/30/15.
 */

var stepTwo = function(){
    //require('./stepTwo.scss');
    return {
        restrict: 'E',
        controller: require('./setTwo.ctrl'),
        controllerAs: 'vm',
        template: require('./stepTwo.html')
    };
};

module.exports = stepTwo;
