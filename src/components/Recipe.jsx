import React, { useState, useEffect } from 'react';
import './recipe.css';

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
        <div className="recipe-global">
            <br />
            <div className="recipe-informations">
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
                <h3 className="recipe-advice">
                    <em
                        dangerouslySetInnerHTML={{
                            __html: '«' + details.instructions + '»',
                        }}
                    ></em>
                </h3>
                <br />
            </div>
        </div>
    );
}

export default Recipe;
