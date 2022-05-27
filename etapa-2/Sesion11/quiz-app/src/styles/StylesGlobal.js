import { FormLabel, Radio, Spinner } from "@chakra-ui/react";
import styled from "styled-components";


export const NavBarStyled = styled.nav`
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`

export const DivForm = styled.div`
    background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: 100vh;
    padding: 4rem;
`

export const ContainerStyled = styled.div`
    background-color: #FFF;
    border-radius: 10px;
    box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
    width: 80%;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FormStyle = styled.form`
    background-color: #FFF;
    border-radius: 10px;
    box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
    width: 600px;
    padding: 4rem;
`

export const Titulo = styled(FormLabel)`
    padding: 1rem ;
    text-align: center;
    margin: 0;
`
export const RadioStyled = styled(Radio)`
    padding: 0;
    font-size: 1.2rem;
    margin: 1rem 0;
`

export const ButtonStyled = styled.button`
    background-color: #8e44ad;
    border: none;
    width: 100%;
    font-size: 1.1rem;
    padding: 1.3rem;
    color: white;
    &:hover {
        background-color: #732d91;
    }
    &:focus {
        outline: none;
        background-color: #5e3370;
    }
`

export const SpinnerStyled = styled.div`
    width: 100%;
    height: 90vh;
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
`