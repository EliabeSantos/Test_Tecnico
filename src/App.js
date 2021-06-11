import Button from '@material-ui/core/Button';
import { NewForm, NewInput, MainContainer, ReposContainer} from "./style"
import React, { useState, useEffect } from 'react';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import UserCard from "./components/userCard"
import RepoCard from "./components/reposCard"
import Logo from "./imgs/github.png"
import {AiFillGithub} from "react-icons/ai"

const App = () => {
  const [data, setData] = useState([]) 
  const [link, setLink] = useState("")
  const [repos, setRepos] = useState([])

  useEffect(() => {
    console.log(data)
  }, [data]);


  let myCredentials = {
    url: "https://api.github.com/users",
    client_id: "b2fe889ce8bcb76289cc",
    client_secret: "7bf3ba57ef866a0bdbdbaf75e93366cb3d3f1524"
  }


  const schema = yup.object().shape({
    cnpj: yup.string('Deve conter entre 11 e 14 dígitos númericos')
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const MyFunc = (data) => {
  fetch(`${myCredentials.url}/${data.Pesquisa}`,{
    method: "GET",
  })
  .then(function(response) {
    setRepos([])
    return response.json()
  })
  .then(function(data) {
    setData([data])
    console.log(data.bio)
    setLink(data.repos_url)
  })
  .catch(function(err) {  
      console.log('Failed to fetch page: ', err);  
  });
}
  const GetRepos = () => {
    fetch(link,{
      method: "GET",
    }).then(function(response){
      return response.json()
    }).then(function(data){
     
      setRepos(data)
      console.log(data)  
    })
  }

  return (
    <MainContainer>
    <NewForm onSubmit={handleSubmit(MyFunc)}>
            <AiFillGithub size="4rem" />
            <NewInput
                required
                label="Pesquisa"
                name="Pesquisa"
                type="text"
                {...register("Pesquisa")}
              />            

            <Button 
              type="submit" variant="contained" color="primary">
              buscar
            </Button>
            </NewForm>
            {data?.map(({login, avatar_url,public_repos, repos_url, bio}, key) => (
              <UserCard func={GetRepos} name={login} img={avatar_url} reposcount={public_repos} link={repos_url} />
            ))}
            {repos.length > 0 && 
             <ReposContainer>
             {repos?.map(({name, stargazers_count, html_url}, key) => (
             <RepoCard name={name} stars={stargazers_count} link={html_url} />
           ))}
         </ReposContainer>
            }
           
            </MainContainer>
  
  );
}

export default App;
