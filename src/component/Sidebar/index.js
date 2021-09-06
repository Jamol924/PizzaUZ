import React from 'react';
import {SidebarContainer, SidebarMenu, SidebarLink,SideBtnWrap, SidebarRouter,Icon, CloseIcon }from './SidebarEliments';

const Sidebar = ({isOpen, toggle}) => {

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizzas</SidebarLink>
                <SidebarLink to="/">Desertis</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRouter to="/">Order nov</SidebarRouter>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar;
