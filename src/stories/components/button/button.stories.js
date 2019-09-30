import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';
import ButtonSimple from './sb-button-simple.svelte';
import markdownNotes from './buttons.stories.md';

storiesOf('Buttons | Buttons', module)
    //Simple Button
    .add(
        'Button simple',
        () => ({
            Component: ButtonSimple,
            props: { title: '😀 😎 👍 💯 !!!!!' }
        }),
        { notes: { markdown: markdownNotes } },
    )

