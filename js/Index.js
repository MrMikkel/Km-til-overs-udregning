Vue.createApp({

    data() {

        return {

            lastWeekKm: null,
            thisWeekKm: null,
            kmTilOvers: null,
            lastWeekKmTilOvers:null,
            kmTilOversAll: null,
            dageSidenSidst:7
            // add here

        }

    },

    methods: {
        udregnKm(){
            this.kmTilOvers = ((15000/365*7) - (this.thisWeekKm-this.lastWeekKm))
            this.kmTilOversAll = (this.lastWeekKmTilOvers + this.kmTilOvers)

        },
        udregnKmUdFraDage(){
            this.kmTilOvers = ((15000/365*this.dageSidenSidst) - (this.thisWeekKm-this.lastWeekKm))
            this.kmTilOversAll = (this.lastWeekKmTilOvers + this.kmTilOvers)
        }

        // add here

    },
    computed:{
        
    }

}).mount("#app")