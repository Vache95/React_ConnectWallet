import styled from 'styled-components';

interface TextProps {
    fs: string;
    color: string;
    ln: string;
    fw: string;
}

export const Text = styled.p<TextProps>`
	font-family: 'Lato';
	font-weight: ${props => props.fw};
	font-size: ${props => props.fs};
	line-height: ${props => props.ln};
	color: ${props => props.color};
`;
