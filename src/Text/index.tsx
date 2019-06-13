import * as React from "react";
import styled from '@xstyled/styled-components'
import { string } from "prop-types";

const BaseText = styled.p`
    color: ${(props:TextProps) => props.color};
    font-size: ${(props:TextProps) => props.font};
`

export enum Font {
    largeTitle = 32,
    title = 24,
    headline = 20,
    subheadline = 16,
    body = 14,
    callout = 12,
    caption = 10,
    footnote = 8
}

export enum Color {
    accentColor = "",
    black = "rgb(0,0,0)",
    blue = "rgb(0,0,255)",
    clear = "rgba(0,0,0,0)",
    gray = "rgb(0,0,0)",
    green = "rgb(0,255,0)",
    orange = "rgb(255,191,0)",
    pink = "rgb(0,0,0)",
    primary = "rgb(0,0,0)",
    purple = "rgb(0,0,0)",
    red = "rgb(255,0,0)",
    secondary = "rgb(0,0,0)",
    white = "rgb(0,0,0)",
    yellow = "rgb(0,0,0)",
}

export interface TextProps {
    font?: Font;
    color?: Color;
}

export const Text: React.FC<TextProps> = ({font=Font.body, color=Color.black ,children}) => {
    return (
        <BaseText color={color} font={font}>
            {children}
        </BaseText>
    )
}