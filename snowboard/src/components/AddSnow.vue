<template>
        <!-- händelselyssnare på formulär, lyssnar till submit. prevent så sidan ej laddas om.-->
        <form @submit.prevent="addSnowboard()">

        <div class="mb-3">
        <label for="name" class="form-label">Snowboardnamn</label>
        <!-- vmodel för de är modeller av varandra. -->
        <input v-model="name" type="text" class="form-control" id="name" placeholder="Modellnamn">
        </div>
        <div class="mb-3">
        <label for="length" class="form-label">Längd</label>
        <input v-model="length" type="text" class="form-control" id="length" placeholder="Längd i cm">
        </div>

        <div class="mb-3">
                <div>Herr eller dam:</div>
        <select class="form-select" v-model="gender">
        <option disabled value="">Välj en</option>
         <option value="1">Herr</option>
        <option value="0">Dam</option>
        </select> 
        </div>
        <input class="btn btn-secondary" type="submit" value="Lägg till">

        </form>
</template>

<script>
export default {
        data() {
           return {
                name: "",
                length: "",
                gender: ""    
                }
        },
        //deklarerar emitsen
        emits: ["addsnowAdded"],
        methods: {
                async addSnowboard() {
                //kontrollerar inmatningen
                if(this.name.length > 3) {

                let addsnowBody = {
                    //skickar med värdet i formuläret
                    name: this.name,
                    length: this.length,
                    gender: this.gender
                };

                const resp = await fetch("https://chjo2104moment2heroku.herokuapp.com/api/snowboard", {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json"
                    },
                    //gör om till json, från objekt. 
                    body: JSON.stringify(addsnowBody)
                });
                //väntar på svar
                const data = await resp.json();
                //töm inmatningsfältet
                this.name = "";
                this.length = "";
                this.gender = "";
                //ladda om sidan. gör en emit till parentsidan
                this.$emit("addsnowAdded");
            }
        }   
        }
        }

</script>
<style>
        .btn-secondary {
            margin-bottom: 8%;    
        }
</style>