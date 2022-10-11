import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Recipe() {
    const [details, setDetails] = useState({});

    const fetchDetails = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/645348/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`
        );
        const data = await api.json();
        console.log(data);
        setDetails(data);
    };

    useEffect(() => {
        fetchDetails();
    }, []);

    return (
        <RecipeGlobal>
            <br />
            <RecipeInformations>
                <h2>
                    En attendant une réouverture rapide de notre restaurant, le
                    chef vous propose de reproduire chez vous la recette du mois
                    :
                </h2>
                <br />
                <h2>
                    <em>« {details.title} »</em>
                </h2>
                <br />

                <h3>Les ingrédients du chef :</h3>
                <br />
                <h3>
                    <em>« </em>
                    {details.extendedIngredients?.map((ingredient) => (
                        <em key={ingredient.id}>{ingredient.original}, </em>
                    ))}
                    <em> »</em>
                </h3>

                {/*<em> « cucumber, olive oil, feta cheese, olives, red oinion, tomato »</em> */}

                <br />
                <h3>Les conseils de préparation du chef : </h3>
                <br />
                <RecipeAdvice>
                    <em
                        dangerouslySetInnerHTML={{
                            __html: '«' + details.instructions + '»',
                        }}
                    ></em>
                </RecipeAdvice>
                <br />
            </RecipeInformations>
        </RecipeGlobal>
    );
}

const RecipeGlobal = styled.div`
    background-color: rgb(240, 240, 240);
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RecipeInformations = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const RecipeAdvice = styled.h3`
    flex: 1;
    width: 70%;
`;

export default Recipe;
