import styled from "styled-components"

export const MainContainer = styled.div`
width: 20rem;
height: 5.5rem;
background-color: #232323;
text-align: center;
border-radius: 10px;
margin: 5px 0 5px 0;
display: flex;
flex-direction: column;
justify-content: space-around;
color:white;
p{
  margin: 0;
}
a{
  text-decoration: none;
  color: white;
}
@keyframes flip-horizontal-bottom {
  0% {
    -webkit-transform: rotateX(180deg);
            transform: rotateX(180deg);
  }
  100% {
    -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
  }
}
animation: flip-horizontal-bottom 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
`