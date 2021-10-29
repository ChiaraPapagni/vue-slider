//creo l'istanza vue
const app = new Vue({
    el: '#root',
    data: {
        slides: [
            {
                image: './assets/img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: './assets/img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum',
            },
            {
                image: './assets/img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: './assets/img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: './assets/img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
        ],
        c: 0,
        isActive: true,
        timer: 0,
    },
    methods: {
        slideUp() {
            this.isActive = false;
            if (this.c != 0) {
                this.c--;
                this.isActive = true;
            } else {
                this.c = this.slides.length - 1;
                this.isActive = true;
            }
            this.resetAutoplay();
        },
        slideDown() {
            this.isActive[this.c] = false;
            if (this.c < (this.slides.length - 1)) {
                this.c++;
                this.isActive[this.c] = true;
            } else {
                this.c = 0;
                this.isActive[this.c] = true;
            }
            this.resetAutoplay();
        },
        resetAutoplay() {
            clearInterval(this.timer);
            this.autoplay();
        },
        autoplay() {
            let t = this;
            this.timer = setInterval(function () {
                t.slideDown();
            }, 3000);
        },
    },
    created() {
        this.autoplay();
    }
});
