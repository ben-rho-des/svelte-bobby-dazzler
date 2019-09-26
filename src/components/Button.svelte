<script>
	export let title = "";
</script>

<style>
	/* cssnano will pack the below three in one selector */

	/* autoprefix */
	button {
		display: flex;
		
	}

	/* color mod func */
	button {
		background: color-mod(yellow blend(red 50%));
	}

	/* overwrite theme */
	
	:root {
		--some-var: blue;
	}

	button {
		color: var(--lightest);;
		padding: 10px;
		border-radius: 10px;
		background: var(--primary);
	}
</style>

<button type="button" title={title}>
	<slot>[no content was provided]</slot>
</button>