import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';
import FormSimple from './sb-form-simple.svelte';
import markdownNotes from './form.stories.md';

storiesOf('Form | Form', module)
    //Simple Button
    .add(
        'Form simple',
        () => ({
            Component: FormSimple
        }),
        { notes: { markdown: markdownNotes } },
    )

