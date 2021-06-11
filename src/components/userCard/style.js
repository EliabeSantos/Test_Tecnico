import styled from "styled-components"

export const MainContainer = styled.div`
    width: 50%;
    height: 80vh;
    background-color: #ffffff;
    display: flex;
    flex-wrap: wrap;
    img{
        height: 20rem;
        width: 20rem;
        border-radius: 100%;
    }
   
    button{
        width: 10rem;
        margin: 1rem;
        height: 2rem;
        background-color: #25a244 !important;
        border-radius: 20px !important;
        text-transform: capitalize;
    }

    @keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
animation: 1s ease-out 0s 1 slideInFromLeft;
`
export const TextContainer = styled.div`
    width: 20rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    p{
        margin: 0;
        font-size: 18px;
    }
`