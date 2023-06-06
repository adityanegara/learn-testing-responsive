import React from "react";
import styled from "@emotion/styled";

const ButtonContainer = styled.button({
    backgroundColor: 'blue',
    '@media (min-width: 600px)':{
        backgroundColor: 'red'
    }
})

const EmotionMediaQuery = () =>{
    return (
        <ButtonContainer>Testing</ButtonContainer>
    )
}

export default EmotionMediaQuery