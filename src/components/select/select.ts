import styled from 'styled-components';

export const Selects = styled.header`
	width: 178px;
	height: 40px;
	border: 1px solid ${props => props.theme.colors.palette[300]};
	border-radius: 8px;
	display: flex;
	align-items: center;
	padding: 10px 12px;
`;

export const SelectsOption = styled.header`
	width: 100%;
	height: 72px;
	padding: 16px 26px 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #fff;
	border-bottom: 1px solid #dbdee5;
`;
