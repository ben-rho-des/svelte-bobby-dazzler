<script>
	export let text;
	export let variation = "default";

	const cla = 'link';
	variation = variation === 'default' ? `${cla}` : `${cla} ${cla}--${variation}`;
</script>

<style>
	a, button {
		color: var(--other-var);
	}

	.link--button {
		color: purple;
	}
</style>

<a	href="#" 
	class={variation}
	>
	<slot />
</a>