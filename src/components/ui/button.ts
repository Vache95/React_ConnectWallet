import styled from 'styled-components';

export const Buttons = styled.button`
	font-family: 'Lato';
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
	color: #ffffff;
	width: 100px;
	height: 40px;
	background-color: ${props => props.theme.colors.paletteActive[600]};
	border-radius: 8px;
	&:hover {
		background-color: ${props => props.theme.colors.paletteActive[700]};
	}
	&:active {
		background-color: ${props => props.theme.colors.paletteActive[800]};
	}
`;
