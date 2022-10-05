import React from 'react';
import './opinions.css';
import OpinionsOthers from '../components/OpinionsOthers';
import OpinionsMine from '../components/OpinionsMine';
import { opinionsData } from '../datas/opinionsData';
import OpinionsAdded from '../components/OpinionsAdded';

function Opinions() {
    return (
        <div>
            <OpinionsMine />
            <OpinionsAdded />

            <div className="opinion-list">
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
            </div>
        </div>
    );

    /*

        
    );
    */
}

export default Opinions;
