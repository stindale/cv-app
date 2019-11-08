angular
    .module('resume')
        .component('header', {
        templateUrl: 'resume/header/header.component.html',
        bindings: {
            contact: '<'
        },
        controller: 
        function HeaderController() {
            var self = this;
            
        },
        controllerAs: 'header'
    });