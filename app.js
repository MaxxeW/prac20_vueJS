// Vue instance: controlling
new Vue({
    el: '#vue-app', // the root of this instance will be #vue-app, the DOM element on html
    data: {
        health: 100,
        ended: false
    },
    methods: {
        punch: function() {
            this.health -= 10;
            if ( this.health <= 0 ) {
                this.ended = true;
            } 
        },
        restart: function() {
            this.health = 100;
            this.ended = false;
        }
    },
    computed: {
        
    } 
});
