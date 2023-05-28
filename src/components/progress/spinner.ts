import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;
export const Spinner = styled.div`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	border: 3px solid #f3f3f3;
	border-top-color: #4a5ec4;
	animation: ${spinAnimation} 1s linear infinite;
`;
