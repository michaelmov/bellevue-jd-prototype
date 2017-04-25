class appController {
    constructor($location) {
        this.$location = $location;
        // Data
        this.dounts = [
            {
                name: 'Original Glazed',
                imageUrl: './images/original-glazed.png',
                description: 'Look out for the Hot Light™! Our Hot Light signals something really special. When we turn the light on, it means that our delicious Original Glazed doughnuts are available right at that very moment! So when you see the Hot Light on, stop in and get some hot Original Glazed doughnuts.',
                price: '$0.75'
            },
            {
                name: 'Glazed Sour Cream',
                imageUrl: './images/glazed-sour-cream.png',
                description: 'This rich and moist cake doughnut is topped with Original Glaze, providing the perfect finishing touch to a scrumptious classic.',
                price: '$0.85'
            },
            {
                name: 'Sugar Doughnut',
                imageUrl: './images/sugar.png',
                description: 'For a delightful change of pace, we roll our classic yeast-raised doughnut in crunchy, granulated sugar instead of running it under the glaze waterfall. A fresh and scrumptious take on our signature doughnut.',
                price: '$1.00'
            }
        ];
        this.titleColor = null;
        this.mainBackground = null;
        this.heroImage = null;
        this.heroOverlay = null;
        this.bezier = null;

        this.options = {
            heroImages: {
                box: './images/donut-box.jpg',
                stand: './images/donut-stand.jpg'
            },
            themeColors: {
                red: '#fd5c63',
                green: '#3be8b0',
                blue: '#0099e5'
            }
        };

        this.getOptions();
    }

    getOptions() {
        let params = this.$location.search();

        this.heroImage = this.options.heroImages[params.heroImage] || this.options.heroImages.stand;
        this.themeColor = this.options.themeColors[params.themeColor] || this.options.themeColors.green;
        this.heroOverlay = params.heroOverlay || null;
        this.bezier = params.bezier ? `cubic-bezier(${params.bezier})` : 'ease-in-out';
    }

}

class cardDirective {
    constructor() {
        this.templateUrl = './card.html';
        this.restrict = 'E';
        this.scope = {
            name: '@',
            image: '@',
            description: '@',
            price: '@',
            theme: '@'
        }
    }
    link(scope, element) {
        let details = element[0].querySelector('.product-details');

        element.on('click', function(event) {
            if(element.hasClass('open')) {
                element.removeClass('open');
                details.classList.add('hidden');
            } else {
                element.addClass('open');
                details.classList.remove('hidden');
            }
        });
    }
}

angular.module('app', [])
    .controller('appController', appController)
    .directive('card', () => new cardDirective)
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true);
    }]);