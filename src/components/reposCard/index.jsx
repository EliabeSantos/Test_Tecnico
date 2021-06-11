import React, { useState } from 'react';
import {MainContainer} from "./style"

const RepoCard = ({name, stars, link}) => {

    return <MainContainer>
        <p>Repositorio: {name}</p>
        <p>Estrelas: {stars}</p>
        <a href={link}>Ver Repo</a>
    </MainContainer>
}
export default RepoCard