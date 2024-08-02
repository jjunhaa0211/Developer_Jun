import React from 'react';
import styled from 'styled-components';

export interface BaseLabelProps {
    text?: string;
    font?: string;
    textColor?: string;
    isCenter?: boolean;
    numberOfLineCount?: number;
    size?: string;
}

const JNLabel: React.FC<BaseLabelProps> = ({
    text = '',
    font = 'Pretendard, sans-serif',
    textColor = 'black',
    isCenter = true,
    numberOfLineCount = 1,
    size = '16px'  // Default size
}) => {
    return (
        <Label
            font={font}
            textColor={textColor}
            isCenter={isCenter}
            numberOfLineCount={numberOfLineCount}
            size={size}
        >
            {text}
        </Label>
    );
};

const Label = styled.div<{ font?: string; textColor?: string; isCenter?: boolean; numberOfLineCount?: number; size?: string }>`
    font-family: ${props => props.font || 'Pretendard'};
    color: ${props => props.textColor || 'black'};
    text-align: ${props => props.isCenter ? 'center' : 'left'};
    line-height: 1.5;
    font-size: ${props => props.size};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${props => props.numberOfLineCount || 1};
    overflow: auto;
    word-break: break-all;
    max-height: 300px;
`;


export default JNLabel;
