import { css } from 'styled-components';

export const flex = (a: string, j: string | false) => css`
	display: flex;
	${a ? `align-items: ${a}` : null}
	${j ? `justify-content: ${j}` : null}
`;
