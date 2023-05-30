import styled from 'styled-components';

interface ImgProps {
	w?: string;
	h?: string;
	br?: string;
}

export const Img = styled.img<ImgProps>`
	display: block;
	width: ${props => props.w};
	height: ${props => props.h};
	border-radius: ${props => props.br};
`;
