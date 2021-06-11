import React, { useState } from 'react';
import RepoCard from "../reposCard"
import Button from '@material-ui/core/Button';
import { MainContainer, TextContainer} from "./style"

const UserCard = ({name, link, reposcount, img, func}) => {
    const [repos, setRepos] = useState([])
    const GetRepos = () => {
        fetch(link,{
          method: "GET",
        }).then(function(response){
          return response.json()
        }).then(function(data){
         
          setRepos(data)
          console.log(repos)  
        })
      }
    return <MainContainer>
        <img src={img}></img>
        <TextContainer>
        <p>{name}</p>
        <p>Repositorios: {reposcount}</p>
        <Button onClick={func}>Buscar Repos</Button>
        </TextContainer>
      
    </MainContainer>
}
export default UserCard