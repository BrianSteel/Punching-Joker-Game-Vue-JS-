new Vue({
    el: '#vue-game',
    data: {
        health: 100,
        ended: false,
        healthPercent50B: false,
        healthPercent50S: false,
        restartBtn: false
    },
    methods: {
        batmanPunch: function () {
            this.restartBtn = true;
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
            }
            if (this.health <= 90) {
                this.healthPercent50B = true;
                setTimeout(()=>{
                    this.healthPercent50B = false;
                },500)
            }
        },
        supermanPunch: function () {
            this.restartBtn = true;
            if (this.health < 20) {
                this.health -= this.health;
            } else {
                this.health -= 20;
            }
            if (this.health <= 0) {
                this.ended = true;
            }
            if (this.health <= 90) {
                this.healthPercent50S = true;
                setTimeout(()=>{
                    this.healthPercent50S = false;
                },500)
            }
            
        },
        restart: function () {
            this.health = 100;
            this.ended = false;
            this.healthPercent50B = false;
            this.healthPercent50S = false; 
            this.restartBtn = false;
        }
    },
    computed: {

    }
});