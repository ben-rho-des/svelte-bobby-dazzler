<script context="module">
	export const FORM = {};
</script>

<script>
	import Button from './Button.svelte';
	import { getContext } from 'svelte';
	import { setContext, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';

	const fields = [];
	const errors = [];

    async function handleSubmit(event) {
        console.log(event);
		console.log(event.target);
		
		fields.map(f => {
			f.validate();
		})
	}
	
	setContext(FORM, {
		registerField: field => {
			fields.push(field);

			onDestroy(() => {
				const i = fields.indexOf(field);
				fields.splice(i, 1);
			});
		},
	});

	function input(event) {
		console.log(event)
		console.log('I:FIELDS = ',fields)
        return true;
    }
</script>

<style>
	form { border: 1px solid red; }
</style>

<form on:submit|preventDefault="{handleSubmit}"
    on:input={input}
	>
	<slot>[no content was provided]</slot>
	<slot name="cancel">
		<Button>Cancel</Button>
	</slot>
	<slot name="submit">
		<Button type="submit">Submit</Button>
	</slot>
</form>