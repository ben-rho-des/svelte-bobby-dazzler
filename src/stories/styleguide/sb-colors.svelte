<script>
  import theme from '../../theme.js';
  import Page from '../sb-components/sb-page.svelte';
</script>

<style>
.swatch {
  width: 25%;
  height: 90px;
  padding: 25px;
  box-sizing: border-box;
}
.row { 
  display: flex;
  justify-content: space-evenly;
  flex-flow: wrap;
}

.darkest { 
  background: var(--darkest);
}
.darker { 
  background: var(--darker);
}
.dark { 
  background: var(--dark);
}
.lightest { 
  background: var(--lightest);
}
.lighter { 
  background: var(--lighter);
}
.light { 
  background: var(--light);
}
.mid { 
  background: var(--mid);
}
.brand { 
  background: var(--brand);
}
.primary { 
  background: var(--primary);
}
.secondary { 
  background: var(--secondary);
}
.action-do { 
  background: var(--action-do);
}
.action-dont { 
  background: var(--action-dont);
}
.action-neutral { 
  background: var(--action-neutral);
}
</style>
<Page title="colors">
  <div class="row">
    {#each theme.colors as color}
      <div class="swatch {color.name}">
        <span class="swatch--name">{color.name}</span>
        <span class="swatch--hex">{color.value}</span>
      </div>
    {/each}
  </div>
</Page>