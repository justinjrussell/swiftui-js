import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components'

import { View } from '../src/View'

const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100%;
    }
    body {
        margin: 0;
    }
    #root {
        height: 100%;
    }
`

addDecorator(storyFn => (
        <React.Fragment>
            <GlobalStyle/>
            <View>
                {storyFn()}
            </View>
        </React.Fragment>
    )
)

const req = require.context('../stories', true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);