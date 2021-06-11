import React, { useState } from 'react';
import {MainContainer} from "./style"

const RepoCard = ({name, stars}) => {

    return <MainContainer>
        <p>Repositorio: {name}</p>
        <p>Estrelas: {stars}</p>
    </MainContainer>
}
export default RepoCard