<script>
  import theme from '../../theme.js';
  import Page from '../sb-components/sb-page.svelte';
  import Charset from '../sb-components/sb-charset.svelte';
</script>

<style>
.font {
  width: 100%;
  box-sizing: border-box;
}
.font--char {
    display: inline-block;
}
.row { 
  display: flex;
  justify-content: space-evenly;
  flex-flow: wrap;
}
.IBMPlexSans { 
    font-family: "IBM Plex Sans";
}
</style>

<Page title="typography">
  <div class="row">
    {#each theme.fonts as font}
        {#each font.weights as weight}
            <div class="font {font.name.replace(/ /g,'')}" style="font-weight: {weight};">
                <span class="font--weight">Weight: {weight}</span>
                <Charset />
            </div>
        {/each}
    
    {/each}
  </div>
</Page>