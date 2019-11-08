angular
    .module('resume')
        .component('experience', {
        templateUrl: 'resume/experience/experience.component.html',
        bindings: {
            experience: '<'
        },
        controller: 
        function ExperienceController() {
            var self = this;
            
        },
        controllerAs: 'experience'
    });