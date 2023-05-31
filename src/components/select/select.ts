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
export const SelectBox = styled.div`
	display: flex;
	align-items: center;
`;

export const SelectArrow = styled.div`
	border-left: 1px solid #dbdee5;
	height: 12px;
	margin-left: 12px;
	padding-left: 14px;
	display: flex;
	align-items: center;
	cursor: pointer;
`;
export const Avatar = styled.img`
	display: block;
	width: 20px;
	height: 20px;
	border-radius: 12.5px;
	cursor: pointer;
`;
export const AvatarAddress = styled.div`
	color: #637282;
	font-size: 14px;
	margin-left: 8px;
	font-weight: 600;
	line-height: 22px;
	cursor: pointer;
`;
export const SelectsOption = styled.div`
	width: 230px;
	height: 124px;
	padding-top: 16px;
	border-radius: 12px;
	position: absolute;
	top: 48px;
	right: 0px;
	background-color: #fff;
	box-shadow: 0px 15px 35px rgba(33, 34, 37, 0.08);
`;
export const OptionItem = styled.div`
	width: 100%;
	height: 48px;
	padding-left: 24px;
	display: flex;
	align-items: center;
	&:hover {
		background-color: #eef3f5;
		cursor: pointer;
		p {
			color: #212225;
		}
	}
`;
export const ItemText = styled.p`
	font-family: Lato;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	color: #637282;
	margin-left: 15px;
`;
