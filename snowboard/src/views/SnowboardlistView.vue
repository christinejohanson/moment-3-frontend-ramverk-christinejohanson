<template>
<div class="container-fluid text-center">
<h2>SNOWBOARDLISTA</h2>
<div class="column">

    <h3>Listan med alla snowboards</h3> 
        <div id="listnamn">
        <p>Namn</p> 
        <p>Längd</p>
        <p>Herr/Dam</p>
        <p>Radera</p></div>
    <!-- händelselyssnare efter emiten. o vad som händer sen.-->
    <Snow @deleteSnow="deleteSnow(name.id)" v-for="name in snows" :name="name" :key="name.id" />
</div>

  <h3>Lägg till några fler snowboards</h3>      
<!--för att lägga till formulär med lägga till fler snow-->
<AddSnow @addsnowAdded="getSnows()" /> 

</div>
<Footer />
</template>

<script>
    //importerar listan
    import Snow from "../components/Snow.vue";
    //importerar läggtill
    import AddSnow from "../components/AddSnow.vue";
    //importerar footern 
    import Footer from "../components/Footer.vue";
    //exporterar
    export default {
        //reaktiv data. returnerar ett objekt. 
        data() {
            return {
                //array. varje sak blir en array.
                snows: []
            }
        },
        components: {
            Snow,
            AddSnow,
            Footer
        },
        methods: {
            //asynkrona events. vänta in funktionen.
            async getSnows() {
                //förkortat ajaxanrop. skickar med url som argument
                const resp = await fetch("https://chjo2104moment2heroku.herokuapp.com/api/snowboard");
                //vad man gör med svaret. väntar på svaret, gör om till json lagra i data.
                const data = await resp.json();
                //lagrar datan i datapropertyn snows.
                this.snows = data;
            },
            //skapa deletefunktion async pga ajax
            async deleteSnow(id) {
                //skicka med id i fetchanrop
                const resp = await fetch("https://chjo2104moment2heroku.herokuapp.com/api/snowboard/" + id, {
                    //ange att man ska gö ett deleteanrop
                    method: "DELETE",
                    //skicka med headers
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json"
                    }
                });
                //få tillbaka data. vänta.
                const data = await resp.json();
                //anropar funktionen. uppdaterar reaktiva datan
                this.getSnows();
            }
        },
        //metod som körs när komponent laddats in. 
        mounted() {
            this.getSnows();
        }
    }

</script>

<style scoped>
     .container-fluid
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #97c5d8;
    }
    h2 {
        background-color: #737374;
        color: whitesmoke;
        font-size: 1.3em;
        font-weight: 700;
        width: 100%;
        padding: 2% 0;
    }
    h3 {
        font-size: 1.3em;
        font-weight: 700;
    }

    .column {
        width: 60%;
        margin: 3% 0;
    }

    p {
        display:inline;
        margin-top: 10px;
        margin-bottom: 7px;
    }

    #listnamn {
        display: flex;
        justify-content: space-between;
        padding: 0 10px;

    }

    @media only screen and ( max-width: 599px) {
        .column {
            width: 80%;
        }
    }

</style>