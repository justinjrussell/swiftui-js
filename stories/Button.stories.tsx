import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../src/Button'
import { StorySections } from './constants'

const stories = storiesOf(`${StorySections.Controls}/Button`, module);

stories.add("Default", () => <Button>Button</Button>)