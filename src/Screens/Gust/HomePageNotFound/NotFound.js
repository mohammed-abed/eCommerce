import styled from "styled-components";

export const RecycleAnimation = styled('div')`
display: inline-block;
  width: 300px;
  height: 300px;
  margin:100px 0;
  box-sizing: border-box;
  animation: spin 2s ease-in-out infinite alternate;
  -webkit-animation: spin 2s ease-in-out infinite alternate;

  @keyframes spin {
	from {transform: rotateY(45deg);}
	to {transform: rotateY(225deg);}
}
`