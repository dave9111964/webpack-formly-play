/**
 * Created by david on 6/1/15.
 */


var stepOne = function(){
    require('./stepOne.less');
    return {
        restrict: 'E',
        controller: require('./stepOne.ctrl'),
        controllerAs: 'stepOneCtrl',
        template: require('./stepOne.html')
    };
};

module.exports = stepOne;
