<script>
	let cls = "heading";

	export let level = "2";
	export let uppercase;
	uppercase = ( uppercase === 'true') ? true : false;
	cls = cls + (uppercase ? ' heading--uppercase' : ''); 


</script>

<style>
	h1, h2, h3, h4, h5, h6 {
		font-family: 'IBM Plex Sans', sans-serif;
	}

	h1, h2, h3 {
		font-weight: 700;
	}
	h4, h5, h6 {
		font-weight: 400;
	}
	.heading--uppercase {
		text-transform: uppercase;
	}
</style>

{#if level === '1'}
	<h1 class={cls}><slot/></h1>
{:else if level === '2'}
	<h2 class={cls}><slot/></h2>
{:else if level === '3'}
	<h3 class={cls}><slot/></h3>
{:else if level === '4'}
	<h4 class={cls}><slot/></h4>
{:else if level === '5'}
	<h5 class={cls}><slot/></h5>
{:else if level === '6'}
	<h6 class={cls}><slot/></h6>
{/if}