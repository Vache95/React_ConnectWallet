import styled from 'styled-components';

export const Selects = styled.div`
	border: 1px solid ${props => props.theme.colors.palette[300]};
	width: 178px;
	height: 40px;
	display: flex;
	align-items: center;
	margin-top: 10px;
	padding: 10px 12px 10px 12px;
	border-radius: 8px;
	position: relative;
	@media (max-width: 640px) {
		border: none;
	}
`;

export const MaskWelcomText = styled.p`
	font-family: Lato;
	font-weight: 700;
	font-size: 24px;
	line-height: 32px;
	color: #212225;
`;

export const MaskText = styled.p`
	font-family: Lato;
	font-weight: 600;
	font-size: 14px;
	line-height: 22px;
	color: #637282;
	margin-bottom: 16px;
`;

export const Contenet = styled.div`
	padding-top: 226px;
	max-width: 296px;
	width: 100%;
	height: auto;
	margin: 0px auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const MaskLogoBg = styled.div`
	width: 96px;
	height: 96px;
	background: #fff8eb;
	border-radius: 90px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 16px;
`;
export const MaskLogo = styled.img``;
