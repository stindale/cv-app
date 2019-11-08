angular
    .module('resume')
        .component('resumeLayout', {
        templateUrl: 'resume/resume-layout/resume-layout.component.html',
        controller: 
        function ResumeController() {
            var self = this;
            
            this.resume = {
                contact: {
                    firstName: 'Bobby',
                    lastName: 'Person',
                    email: 'bob.person@gmail.com',
                    phone: '778-778-7788',
                    website: 'www.bobbypersonas.com'
                },
                skills: [
                    {language: 'PHP', level: 88},
                    {language: 'Javascript', level: 93},
                    {language: 'C++', level: 70},
                    {language: 'MATLAB', level: 100},
                    {language: 'Java', level: 50},
                    {language: 'Python', level: 30},
                    {language: 'Windows', level: 60},
                    {language: 'Mac', level: 100},
                    {language: 'Linux', level: 30},
                    {language: 'Perl', level: 20},
                    {language: 'SQL', level: 98},
                ],
                education: [
                    {
                        school: 'University of British Columbia',
                        degree: 'BSc in Computer Science',
                        time: '09/2013 – 06/2017',
                        gpa: '4.0',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc'
                    },
                    {
                        school: 'Oyster Bay School',
                        time: '09/2008 – 06/2013',
                        description: 'Graduated with honors'
                    }
                ],
                experience: [
                    {
                        company: 'Microsoft',
                        position: 'Software Engineering Intern',
                        time: '07/2016 – 09/2016',
                        description: 'Designed and implemented a productivity add-on for Office using C# and VSTO in .NET framework to automate and synchronize activity reporting. Created testing and demonstration suites for software.'
                    },
                    {
                        company: 'Sherbone School',
                        position: 'Teaching Fellow',
                        time: '09/2015 – 06/2016',
                        description: 'Taught class of 21 students to program in C, PHP, JavaScript, and object-oriented concepts. Maintained weekly office hours and problem-solving sessions. Graded problem sets and exams. '
                    }
                ]
            }
        },
        controllerAs: 'layout'
    });