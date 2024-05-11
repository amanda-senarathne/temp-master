(function(){
    angular
        .module("TaPortal")
        .controller("SEditProfileController", SEditProfileController);

    /* HTML and Java script communicate via scope */
    /* handles the JAVA Script */

    function SEditProfileController($routeParams, $location, UserService, $rootScope, CoursesandSemestersService) {
        var vm = this;
        vm.updateUser = updateUser;
        vm.deleteUser = deleteUser;
        vm.userId = $rootScope.currentUser._id;
        var userId = $rootScope.currentUser._id;
        vm.logout = logout;

        
        vm.addCurrentCourses =addCurrentCourses;
        vm.deleteCurrentCourse = deleteCurrentCourse;

        vm.addUserCourses = addUserCourses;
        vm.deleteUserCourse = deleteUserCourse;

        vm.addEducationalQualification = addEducationalQualification;
        vm.removeEducationalQualification = removeEducationalQualification;

        vm.addProfessionalQualification = addProfessionalQualification;
        vm.removeProfessionalQualification = removeProfessionalQualification;


        var user;

        function init(){
            UserService
                .findUserById(userId)
                .then(function (response) {
                    vm.user = response.data;
                    user = vm.user;
                    console.log("user -> ", user);
                });


            CoursesandSemestersService
                .findAllCourses()
                .then(function (response) {
                    vm.courses = response.data;

                });
        }
        init();


        function addEducationalQualification() {
            if (Array.isArray(vm.user.educationalQualifications) === false) {
                vm.user.educationalQualifications = [""]
            }
            else {
                vm.user.educationalQualifications.push("")
            }
        }

        function removeEducationalQualification(index) {
            if (Array.isArray(vm.user.educationalQualifications) !== false && typeof vm.user.educationalQualifications[index] !== "undefined") {
                vm.user.educationalQualifications.splice(index, 1)
            }
        }

        
        function addProfessionalQualification() {
            if (Array.isArray(vm.user.professionalQualifications) === false) {
                vm.user.professionalQualifications = [""]
            }
            else {
                vm.user.professionalQualifications.push("")
            }
        }

        function removeProfessionalQualification(index) {
            if (Array.isArray(vm.user.professionalQualifications) !== false && typeof vm.user.professionalQualifications[index] !== "undefined") {
                vm.user.professionalQualifications.splice(index, 1)
            }
        }


        function addCurrentCourses(user) {
            UserService
                .addCurrentCourses(userId, user)
                .then(function (res) {
                    var updatedUser = res.data;
                    if(updatedUser){
                        vm.success="Successfully updated courses";
                        init();
                    }else {
                        vm.error="Someting is off";
                    }
                })
        }

  
        function deleteCurrentCourse(course) {
            UserService
                .deleteCurrentCourse(userId, course)
                .then(function (res) {
                    var updatedUser = res.data;
                    if(updatedUser){
                        vm.success="Successfully Deleted courses";
                        init();
                    }else {
                        vm.error="Something is off";
                    }
                })

        }


        function deleteUserCourse(course) {
            UserService
                .deleteUserCourse(userId, course)
                .then(function (res) {
                    var updatedUser = res.data;
                    if(updatedUser){
                        vm.success="Successfully Deleted courses";
                        init();
                    }else {
                        vm.error="Something is off";
                    }
                })

        }

        
        // Author: Sesha Sai Srivatsav
        function addUserCourses(user) {
            UserService
                .addUserCourses(userId, user)
                .then(function (res) {
                    var updatedUser = res.data;
                    if(updatedUser){
                        vm.success="Successfully updated courses";
                        init();
                    }else {
                        vm.error="Someting is off";
                    }
                })
        }



        // Author: Sesha Sai Srivatsav
        function logout() {
            UserService
                .logout()
                .then(
                    function (response) {
                        $location.url("/login");
                    },
                    function () {
                        $location.url("/login");
                    }
                );
        }

        // Author: Sesha Sai Srivatsav
        function deleteUser() {
            UserService
                .deleteUser(userId)
                .then(function (response) {
                    var result= response.data;
                    if(result){
                        $location.url("/login");
                    }else{
                        vm.error = "can't delete you."
                    }
                });
        }


        function updateUser(user){
            console.log(user)
            if(vm.myform.$valid == false){

                vm.alert = "* Enter the fields";

            }else {
                UserService
                    .updateUser(userId, user)
                    .then(function (res) {
                        var updatedUser = res.data;
                        if (updatedUser){
                            vm.success="successfully updated!";
                            init();
                        }else{
                            vm.error = "Some thing doesn't seem right here";
                        }
                    });
            }
        }

    }


})();