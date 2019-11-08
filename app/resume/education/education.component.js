angular
    .module('resume')
        .component('education', {
        templateUrl: 'resume/education/education.component.html',
        bindings: {
            education: '<'
        },
        controller: 
        function EducationController() {
            var self = this;
            
        },
        controllerAs: 'education'
    });