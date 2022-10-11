import React, { useState } from 'react';
// import SubMenu from './SubMenu';
import styled from 'styled-components';
import { filterData } from '../datas/filterData';

const SidebarLink = styled.div`
    // box-shadow: inset 0px 0px 0px 2px blue;
    
    display: flex;
    color: black;
    justify-content: space-between;
    align-items: center;
    margin-left: 0px;
    list-style: none;

    text-decoration: none;
    font-size: 18px;
`;

const CaretFilter = styled.div`
    padding: 1px 6px 0px 10px;
`;

const DropdownLink = styled.div`
    display: flex;
    justify-content: center;
    text-decoration: none;
    filter: brightness(0%);
    font-size: 11px;

    &:hover {
        filter: brightness(100%);
        cursor: pointer;
    }
`;

const Idee = styled.div`
    // box-shadow: inset 0px 0px 0px 2px red;
    box-shadow: inset 0px 0px 0px 0.5px black;
    background-color : white;

    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 0px 8px 0px 8px;
`;

const Filter = styled.div`
    box-shadow: inset 0px 0px 0px 0.5px black;
    display: flex;
    padding : 4px 0px 4.2px 0px;

    &:hover {
        cursor : pointer;
    }
`;

const FilterTitle = styled.div `

padding-left : 5px;

`;

function FoodFilter() {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    console.log(subnav);

    return (
        <div style={{ width: '100%', backgroundColor : "rgb(240, 240, 240)"}}>
            {filterData.map((item, index) => {
                return (
                    <SidebarLink item={item} key={index}>
                        <Filter onClick={item.subNav && showSubnav}>
                            <FilterTitle>{item.title}</FilterTitle>
                            <CaretFilter>
                                {item.subNav && subnav
                                    ? item.iconOpened
                                    : item.subNav
                                    ? item.iconClosed
                                    : null}
                            </CaretFilter>
                        </Filter>

                        <Idee>
                            {subnav &&
                                item.subNav.map((item, index) => {
                                    return (
                                        <DropdownLink key={index}>
                                            {item.icon}
                                        </DropdownLink>
                                    );
                                })}
                        </Idee>
                    </SidebarLink>
                );
            })}
        </div>
    );
}

export default FoodFilter;
