
const { createApp } = Vue;

createApp({
    data() {
        return {
            slides: [
                    {
                        image: 'img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                        display: true,
                    }, {
                        image: 'img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                        display: false
                    }, {
                        image: 'img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                        display: false
                    }, {
                        image: 'img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                        display: false
                    }, {
                        image: 'img/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                        display: false
                    }
            ]
        }
    },
    methods: {
        nextSlide() {
            const activeIndex = this.slides.findIndex((slide) => slide.display);
            this.slides[activeIndex].display = false;
            const nextIndex = (activeIndex + 1) % this.slides.length;
            this.slides[nextIndex].display = true;
        },
          

        prevSlide() {
            const activeIndex = this.slides.findIndex((slide) => slide.display);
            this.slides[activeIndex].display = false;
            const prevIndex = activeIndex === 0 ? this.slides.length - 1 : activeIndex - 1;
            this.slides[prevIndex].display = true;
        },
          

        checkIndex(index) {
            return this.slides[index].display ? 'active' : '';
        },

        activeClass(index) {
            this.slides.forEach((slide, i) => {
              slide.display = i === index;
            });
          }          
    }
}).mount('#app');