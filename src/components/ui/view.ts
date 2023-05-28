import styled from 'styled-components';

interface ViewProps {
    w?: string;
    h?: string;
    bgc?: string;
    fw?: string;
    dis?: string;
    dis_a?: string;
    dis_j?: string;
    ml?: string;
    mr?: string;
    mb?: string;
    mt?: string;
    pl?: string;
    pr?: string;
    pb?: string;
    pt?: string;
    br?:string
}

export const View = styled.div<ViewProps>`
	width: ${props => props.w};
	height: ${props => props.h};
	background-color: ${props => props.bgc};
	display: ${props => props.dis};
	flex-direction: ${props => props.dis_a};
	align-items: ${props => props.dis_j};
	margin-left: ${props => props.ml};
	margin-right: ${props => props.mr};
	margin-bottom: ${props => props.mb};
	margin-top: ${props => props.mt};
	padding-top: ${props => props.pt};
	padding-left: ${props => props.pl};
	padding-right: ${props => props.pl};
	padding-top: ${props => props.pt};
	padding-bottom: ${props => props.pb};
    border-radius:${props => props.br};
`;
