// Vue instance: controlling
new Vue({
    el: '#vue-app', // the root of this instance will be #vue-app, the DOM element on html
    data: {
        available: false,
        nearby: false
    },
    methods: {

    },
    computed: {
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    } 
});
