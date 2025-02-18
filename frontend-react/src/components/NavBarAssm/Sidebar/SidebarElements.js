import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkR} from 'react-router-dom'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3 ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0%')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkR)`
    display: flex; 
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover{
        color:rgba(152,131,0,1);
        transition: 0.2s ease-in-out;
    }
`;
 
export const SideBtnWrap = styled.div` 
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: linear-gradient(90deg, rgba(152,131,0,1) 0%, rgba(226,194,0,1) 51%, rgba(152,131,0,1) 100%);
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
`


export const UserName = styled(LinkR)`

    text-decoration: none;
    color: #fff;
    font-size: 1.1rem;
`;

export const UsernameWrapper = styled.button`
    border-radius: 50px;
    background-color: transparent;
    overflow: hidden;
    border: 2px solid #fff;
    padding: 7px 14px;
    cursor: pointer;
`