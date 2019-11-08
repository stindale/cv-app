angular
    .module('resume')
        .component('skills', {
        templateUrl: 'resume/skills/skills.component.html',
        bindings: {
            skills: '<'
        },
        controller: 
        function SkillsController() {
            var self = this;
            
        },
        controllerAs: 'skills'
    });