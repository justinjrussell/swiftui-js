import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Text } from '../src/Text'
import { View } from '../src/View'

storiesOf("SwiftUI Tutorial", module)
    .add("Creating and Combining View", () => (
        <View>
            <Text>Hello World</Text>
        </View>
    ))