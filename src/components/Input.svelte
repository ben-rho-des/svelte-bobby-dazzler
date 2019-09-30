<script>
	import { getContext } from 'svelte';
	import { FORM } from './Form.svelte';

	export let variation = "default";
	export let value = "";
	export let placeholder = "placeholder";
	export let validationRules = [];
	let error = false;
	let message = "";

	const cla = 'input';
	let c = variation === 'default' ? `${cla}` : `${cla} ${cla}--${variation}`;

	const field = {
		rules: validationRules,
		validate: () => {
			let valid = true;
			let msg = "";
			validationRules.map((r) => {
				switch(r.type) {
					case 'required': 
						valid = valid ? value !== "" : false;
					break;
					case 'exact': 
						valid = valid ? value.length == r.length : false;
					break;
					case 'max': 
						valid = valid ? value.length <= r.length : false;
					break;
					case 'min': 
						valid = valid ? value.length >= r.length : false;
					break;
					case 'pattern':
						// var reg = new RegExp(r.pattern);
						valid = valid ? r.pattern.test(value) : false;
					break;
					default:
					break;
				}
				if (msg === "" && !valid) {
					msg = r.message;
				}
			});

			error = !valid;
			message = msg;
		}
	};
	const { registerField } = getContext(FORM);
	registerField(field);

	function change(e) {
		value = e.target.value;
	}
</script>

<style>
	input[type="text"] {
		padding: 20px;
	}

	.has-error {
		border: 1px solid red;
	}
</style>

<input
	class={c}
	class:has-error={error}
	value={value}
	placeholder={placeholder}
	on:input={(change)}
/>
{#if error}
	<slot name="error">
		<p>{message}</p>
	</slot>
{/if}