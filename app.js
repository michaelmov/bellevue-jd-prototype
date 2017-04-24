class appController {
    constructor($location) {
        this.$location = $location;
        this.titleColor = null;
        this.mainBackground = null;

        this.options = {
            mainBackground: {
                grey: '#F2F2F4',
                blue: '#e6f5ff'
            }
        };

        this.getOptions();
    }

    getOptions() {
        let params = this.$location.search();
        this.mainBackground = this.options.mainBackground[params.mainBackground] || this.options.mainBackground.grey;
    }

}

angular.module('app', [])
    .controller('appController', appController)
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true);
    }]);