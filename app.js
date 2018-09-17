// Vue instance: controlling
new Vue({
    el: '#vue-app', // the root of this instance will be #vue-app, the DOM element on html
    data: {
        age: 20,
        a: 0,
        b: 0
    },
    methods: {
        /*
        addToA: function() {
            console.log('addToA');
            return this.a + this.age;
        },
        addToB: function() {
            console.log('addToB');
            return this.b + this.age;
        }
        */
    },
    computed: {
        addToA: function() {
            console.log('addToA');
            return this.a + this.age;
        },
        addToB: function() {
            console.log('addToB');
            return this.b + this.age;
        }
    } 
});
