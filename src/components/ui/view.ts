import styled, { css } from 'styled-components';

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
	br?: string;
	brc?: string;
	brl?: string;
	s640?: boolean;
	pos?: string;
	tt?: string;
	l?: string;
	r?: string;
	b?: string;
	bs?: string;
	hs?: boolean;
}

export const View = styled.div<ViewProps>`
	${props => (props.brc ? `border: 1px solid ${props.brc}` : null)};
	width: ${props => props.w};
	height: ${props => props.h};
	background-color: ${props => props.bgc};
	display: ${props => props.dis};
	align-items: ${props => props.dis_a};
	justify-content: ${props => props.dis_j};
	margin-left: ${props => props.ml};
	margin-right: ${props => props.mr};
	margin-bottom: ${props => props.mb};
	margin-top: ${props => props.mt};
	padding-top: ${props => props.pt};
	padding-left: ${props => props.pl};
	padding-right: ${props => props.pl};
	padding-top: ${props => props.pt};
	padding-bottom: ${props => props.pb};
	border-radius: ${props => props.br};
	box-shadow: ${props => props.bs};
	position: ${props => props.pos};
	top: ${props => props.tt};
	left: ${props => props.l};
	right: ${props => props.r};
	bottom: ${props => props.b};

	${props =>
		props.hs
			? `
					&:hover {
						background-color: #eef3f5;
                        cursor:pointer;
                        p {
                            color: #212225;
                        }
					}`
			: null};
	${props =>
		props.s640
			? `@media (max-width: 640px) {
        border:none
     }
     `
			: null};
`;
