/**
 * Created by david on 6/1/15.
 */

var stepOneCtrl = function(){
    //var stepOneVM = this;

    // variable assignment
    this.model = {
        firstName: 'Obi Wan',
        something: 'foobar'
    };
    this.fields = [
        {
            type: 'input',
            key: 'firstName',
            templateOptions: {
                label: 'First Name'
            }
        },
        {
            template: '<hr />'
        },
        {
            type: 'select',
            key: 'something',
            templateOptions: {
                label: 'Select Somthing',
                valueProp: 'name',
                options: [
                    {name: 'foo'},
                    {name: 'bar'},
                    {name: 'foobar'}
                ]
            }
        }
    ];


    // copy fields because formly adds data to them
    // that is not necessary to show for the purposes
    // of this lesson
    this.originalFields = angular.copy(this.fields);

    // function definition
    this.onSubmit = function() {
        alert(JSON.stringify(this.model), null, 2);
    };

//    vm.onSubmit = onSubmit;
};

module.exports = stepOneCtrl;

