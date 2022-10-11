import React from 'react';
import OpinionsOthers from '../components/OpinionsOthers';
import OpinionsMine from '../components/OpinionsMine';
import { opinionsData } from '../datas/opinionsData';
import OpinionsAdded from '../components/OpinionsAdded';
import styled from 'styled-components';

const OpinionList = styled.div`
    height: 45%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, 600px);
    grid-gap: 20px;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;

    @media (max-width: 600px) {
        grid-template-columns: repeat(auto-fit, 100%);
        grid-gap: 5px;
        padding: 5px;
    }
`;

function Opinions() {
    return (
        <div>
            <OpinionsMine />
            <OpinionsAdded />

            <OpinionList>
                {opinionsData.map((item, index) => {
                    return (
                        <OpinionsOthers
                            key={index}
                            name={item.name}
                            image={item.image}
                            stars={item.stars}
                            date={item.date}
                            comment={item.comment}
                        />
                    );
                })}
            </OpinionList>
        </div>
    );

    /*

        
    );
    */
}

export default Opinions;
