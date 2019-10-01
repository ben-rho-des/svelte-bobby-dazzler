<script context="module">
	export const FORM = {};
</script>

<script>
	import Button from './Button.svelte';
	import { getContext } from 'svelte';
	import { setContext, onDestroy } from 'svelte';

	const fields = [];
	let errors = [];
	let submissionError = false;

    async function handleSubmit(event) {
        console.log(event);
		console.log(event.target);
		
		clearErrors();


		fields.map(f => {
			f.validate();
			if (!f.valid()) {

				submissionError = true;
				errors.push(f.anchor);
				console.log(errors)
			}
			console.log(submissionError)
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

	function clearErrors() {
		submissionError = false;
		errors = [];
	}

	function input(event) {
		console.log('I:FIELDS = ',fields)
        return true;
	}
	
	function gotoField(fieldId) {
		window.location = `#${fieldId}`;
    	document.getElementById(fieldId).focus();
	}
</script>

<style>
	form { border: 1px solid red; }

	.form--submission-error {
		padding: 20px;
		border-radius: 4px;
		background: lightcoral;
	}
</style>

<form on:submit|preventDefault="{handleSubmit}"
    on:input={input}
	>
	{#if submissionError}
		<div class="form--submission-error">
		submission error component
		{#each errors as { id, name }, i}
			<li>
				<a href='javascript:;' on:click={() => gotoField(id)}>{i + 1}: {id} {name}</a>
			</li>
		{/each}
		</div>
	{/if}
	<slot>[no form content was provided]</slot>
	<slot name="cancel">
		<Button>Cancel</Button>
	</slot>
	<slot name="submit">
		<Button type="submit">Submit</Button>
	</slot>
</form>