<template>
    <div class="container-fluid text-center">
    <h2>EN INFOSIDA</h2>
    <p>Vue är ett ramverk för JavaScript för att skapa användargränssnitt. Det byggs upp på vanlig 
        HTML, CSS och JavaScript, men det öppnar också upp för komponentbaserad programmering.
    </p>
    <p>Med hjälp av Vite som byggsystem packas källkodsfilerna ihop och nya filer för publicering
        genereras. </p>
    <p>För att dela upp gränssnittet har jag använt mig av olika komponenter s.k. Singe-File-Component som 
        möjliggör återanvändning av de olika delarna. 
    </p> 
    <p>Single-Page-Application används och tack vare det är det endast en HTML-fil som uppdateras 
        med hjälp av JavaScript och hur användaren interagerar med webbplatsen.
    </p>
    <p>Jag har även använt mig av CSS-ramverket Bootstrap i den här uppgiften.</p>
    <h3>Mina erfarenheter av Vue</h3>
    <p>
        Jag tycker att Vue känns som ett bra ramverk att använda. Det tar ett litet tag att lära sig hur 
        de olika komponenterna ska sättas ihop och hur sidorna ska byggas upp med routers och views, men när det 
        väl fungerar är det smidigt. Jag vet att det är repetition som fungerar för mig när jag ska lära mig 
        ny kod och det har jag gjort i detta moment. 
    </p>
    <p></p>
    <p>
        Det jag upplevde som klurigast att få till var inmatningsfältet för gender (herr/dam) så att det skulle 
        bli rätt mot databasen, men jag fick till det till slut. Jag skapade även en if-sats för att skriva 
        ut "dam" eller "herr" till webbsidan. 
    </p> 
    <p>Att använda sig mer av Bootstrap i denna uppgift upplevde jag som enklare. Förhoppningsvis har jag fått lite 
        mer erfarenhet av det ramverket och förstår hur det fungerar. 
    </p>  
    </div>
    <Footer />
</template>

<script>
    //importerar footern 
    import Footer from "../components/Footer.vue";

    export default {
        components: {

            Footer
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
        font-size: 1em;
        width: 80%;
        font-weight: 700;
    }
    p {
        width: 80%;
    }
</style>