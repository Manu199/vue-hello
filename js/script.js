

const { createApp } = Vue;


createApp({

    data(){
        return {
            helloWorld: 'Hello World!',
            placeHolderImage: require('https://loremflickr.com/640/360'),
        }
    }

}).mount('#app')

