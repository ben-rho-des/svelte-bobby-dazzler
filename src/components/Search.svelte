<script>
	import Button from '../components/Button.svelte';
	import Input from '../components/Input.svelte';
</script>

<style>
	div {
		border: 1px solid red;
	}

	/* overwrite child style */
	div :global(button) {
        background: purple;
    }
</style>

<div>
	<Input placeholder="search" />
	<Button>Search</Button>
</div>