import styled from 'styled-components'


export const Container = styled.section`
    display: flex;
    width: 100%;
    height: 400px;
    background-color: black;
    
`;

export const Formulario = styled.div`
    width: 60%;
    height: auto;
    margin: auto;
    background-color: black;
    border-radius: 5px;

    h3{
        font-size: 25px;
        color: white;
        margin-bottom: 20px;
    }

    .caixa{
        width: 80%;
        padding: 10px;
        margin: 30px auto;
        text-align: center;
        border-radius: 5px;


        input{
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border-radius: 5px;
        border: none;
        }

        textarea{
            width: 100%;
            height: 100px;
            padding: 10px;
            margin: 10px 0;
            border-radius: 5px;
        }

        button{
            justify-content: right;
            text-align: right;
            align-items: flex-end;
            margin-right: 0;
        }
    }

    @media screen and (max-width: 768px){
            width: 90%;
        }

    @media screen and (min-width: 768px) and (max-width: 1024px){
        width: 75%;
    }
    
`;  