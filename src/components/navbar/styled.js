import styled from 'styled-components';
import {Link as LinkL} from 'react-router-dom';


export const Header = styled.nav`
    background-color: rgba(0,0,0,0.9);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    height: auto;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: space-between;
    }

`;

export const HeaderContainer = styled.div`

`;

export const HeaderLogo = styled.div`
         
`;

export const HeaderLogoL = styled(LinkL)`
    text-decoration: none;
    h1{
        color: white;
        letter-spacing: 3px;
        padding: 10px;
        margin: 0 10px;
        border-radius: 30px;

        &:hover{
            background: linear-gradient(45deg, blue, green , yellow);
            text-decoration: none;
        }
    }     
`;

export const HeaderLinks = styled.div`
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 5px;
`;