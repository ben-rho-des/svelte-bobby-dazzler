<script>
	export let variation = "default";
	export let value = "";
	export let placeholder = "placeholder";
	
	const cla = 'input';
	variation = variation === 'default' ? `${cla}` : `${cla} ${cla}--${variation}`;
</script>

<style>
	input[type="text"] {
		padding: 20px;
	}
</style>

<input
	class={variation}
	value={value}
	placeholder={placeholder}
/>