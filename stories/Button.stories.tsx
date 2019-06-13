import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../src/Button'
import { StorySections } from './constants'

storiesOf(`${StorySections.Controls}/Button`, module)
    .add("Default", () => <Button>Button</Button>);