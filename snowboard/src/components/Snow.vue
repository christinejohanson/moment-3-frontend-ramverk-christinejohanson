<template>
    <!-- eventlistener för att radera. samt emit för att skicka till föräldern-->
    <div id="listan" @click="$emit('deleteSnow')"><p>{{name.name}}</p>
    <p>{{name.length}}</p>
    <!--ifsats för vad som ska skrivas ut i listan-->
    <p v-if="name.gender == '0'">Dam</p>
    <p v-else-if="name.gender == '1'">Herr</p>
    <button type="button" class="btn btn-warning" @click="$emit('deleteSnow')">Radera</button>

    </div>

</template>

<script>
    //ta emot propsen
    export default {
        props: {
            name: Object
        },
        emits: ["deleteSnow"]
    }
</script>

<style scoped>

    #listan {
        background-color:#737374;
        display: flex;
        justify-content: space-between;
        margin-bottom: 3px;
        border-radius: 5px;
    }
    p {
        color: white;
        padding: 2%;
        margin-bottom: 0;
    }
    .btn-warning {
        font-size: 1em;
        margin: 4px;
        padding: 8px;
    }

</style>