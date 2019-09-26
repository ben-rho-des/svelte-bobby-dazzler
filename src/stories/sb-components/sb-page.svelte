<script>
  import theme from '../../theme.js';

  export let title = "section title";
  import Heading from '../../components/Heading.svelte';
</script>

{#each theme.fonts as font}
    <link href={font.src} rel="stylesheet">
{/each}

<Heading level="1" uppercase="true">{title}</Heading>

<slot></slot>