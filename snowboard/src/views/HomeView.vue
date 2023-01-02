<template>
<div class="container-fluid text-center">
  <h2>WEBBPLATS MED SNOWBOARDS</h2>
  <Banner />
  <div class="row">
    <div class="col">
    <p>Den här webbplatsen handlar om min stora passion sedan många år tillbaka, nämligen snowboard. Jag har gjort 
      många vintersäsonger på skidorter och för 12 år sedan flyttade jag till Åre och allt det är tack vare mitt 
      intresse för snowboardåkningen. Väldigt många vänner har jag funnit via detta intresse som lite klychigt även 
      kan kallas en livsstil, och det stämmer nog.
    </p>
    <p>På sidan Snowboardlista finns förteckning över alla de olika snowboards jag har 
      ägt sedan 1995, då jag fick min första snowboard, en Gnu 155cm. Jag är absolut ingen prylnörd eller behöver den 
      senaste utrustningen, men några olika brädor har det helt klart blivit genom åren.  
    </p>
    <p>På undersidan Info om Vue presenterar jag ramverket Vue samt mina erfarenheter
      av användningen av ramverket.
    </p>
  </div>      
  </div>
</div>
<Footer />

</template>

<script>
    //importerar footern 
    import Footer from "../components/Footer.vue";
    import Banner from "../components/Banner.vue";

    export default {
        components: {
            Footer,
            Banner
        }
      }
</script>

<style scoped>
    h2 {
        background-color: #737374;
        color: whitesmoke;
        font-size: 1.3em;
        font-weight: 700;
        padding: 2% 0;
    }
    .container-fluid {
    background-color: #97c5d8;
    }
</style>
