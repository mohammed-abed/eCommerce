import styled from "styled-components"
export const LoadingSpinner = styled('img')`
 width:100px;
 height: 100px;
animation: ease-in load 2s alternate infinite;
 @keyframes load{
    0%{transform:scale(1)}
    100%{transform:scale(2)}
 }
`
export const RecycleAnimation = styled('div')`
   -webkit-animation: rotation 3s infinite linear;
  -moz-animation: rotation 3s infinite linear;
  -o-animation: rotation 3s infinite linear;
  animation: rotation 3s infinite linear;
   transform-origin: 102px 94px;

@-webkit-keyframes rotation {
   from {-webkit-transform: rotate(0deg);}
   to   {-webkit-transform: rotate(359deg);}
}
@-moz-keyframes rotation {
   from {-moz-transform: rotate(0deg);}
   to   {-moz-transform: rotate(359deg);}
}
@-o-keyframes rotation {
   from {-o-transform: rotate(0deg);}
   to   {-o-transform: rotate(359deg);}
}
@keyframes rotation {
   from {transform: rotate(0deg);}
   to   {transform: rotate(359deg);}
}
`