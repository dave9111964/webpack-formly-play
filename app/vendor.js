/**
 * Created by david on 5/29/15.
 */

//export {
var vendors = function(){
    require('./index.less');
    require("../node_modules/bootstrap-webpack/bootstrap.config.js");
    require("../node_modules/bootstrap-webpack/bootstrap.config.less");
    require('../node_modules/angular');
    require('../node_modules/reflect-metadata');
    //require('../node_modules/angular2/node_modules/traceur');
    //require('../node_modules/angular2/angular2_sfx');
//    require('../node_modules/angular2/angular2');
    //require('../node_modules/angular2/annotations');
    require('../node_modules/angular-formly');
    require('../node_modules/angular-formly-templates-bootstrap');
};

module.exports = vendors;
