import '../css/utils.css';

import { storiesOf } from '@storybook/svelte';
// import { action } from '@storybook/addon-actions';
import Colors from './sb-colors.svelte';

import Typography from './sb-typography.svelte';

storiesOf('Styleguide | Styleguide', module)
    .add(
        'Colors',
        () => ({
            Component: Colors
        })
    )

storiesOf('Styleguide | Styleguide', module)
    .add(
        'Typography',
        () => ({
            Component: Typography
        })
    )


