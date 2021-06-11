import styled from "styled-components"
import TextField from '@material-ui/core/TextField';

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #232323;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`


export const NewForm = styled.form`
@keyframes scaleupcenter {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
  animation: 1s ease-out 0s 1 scaleupcenter;

width: 100%;
height: 10vh;
background-color: #232323;

display: flex;
align-items: center;
flex-direction: row;

text-align: center;

button{
  width: 10rem;
  margin: 1rem;
  height: 2rem;
  background-color: #25a244 !important;
  border-radius: 20px !important;
  text-transform: capitalize;
}
img{
  width: 5rem;
  margin: 0 1rem;
}
@media(max-width: 600px){
  width: 100%;
  margin: 1.5rem auto 0 auto ;
}
@media(max-width: 350px){
  
  font-size: 11px;
    height: 9rem;
    margin: 0;
}
`;

export const NewInput = styled(TextField)`
width: 15rem;
height: 4rem;
margin: 0 3rem !important;
color: white !important;
padding: 0 !important;

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0 30px white #232323 !important;
  background-color: #232323 !important;
  transition: background-color white 5000s ease-in-out 0s !important;
}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active
{
 -webkit-box-shadow: 0 0 0 30px #232323 inset !important;
}

`

export const ReposContainer = styled.div`
    width: 50%;
    height: 90vh;
    background-color: #ffffff;
    border-radius: 10px 0 0 0;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    overflow-y: scroll;
    ::-webkit-scrollbar {
  width: 0;
}
`