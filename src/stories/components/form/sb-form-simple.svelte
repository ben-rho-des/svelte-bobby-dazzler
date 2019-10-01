<script>
  import Form from '../../../components/Form.svelte';
  import Button from '../../../components/Button.svelte';

  import Input from '../../../components/Input.svelte';

  const firstValidationRules = [
    {type: 'required', message: 'This field is required'},
    {type: 'pattern', message: 'This field is required', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/},
  ];
  const secondValidationRules = [
    {type: 'pattern', message: 'This field is required', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/},
  ];
  const thirdValidationRules = [
    {type: 'min', message: 'This field needs to be a minimum of 10 characters', length: 10},
    {type: 'max', message: 'This field cant be more thant 12 characters', length: 12},
  ];
</script>

<Form>
  Form

  <Input id="email" anchorName="Email address" validationRules={firstValidationRules}>
    <p slot="error">THERE IS DEFINATELY AN ERROR!</p>
  </Input>
  <Input id="bus_email" anchorName="Business email address" validationRules={secondValidationRules}></Input>
  <Input id="amount" anchorName="Amount" validationRules={thirdValidationRules}></Input>
</Form>