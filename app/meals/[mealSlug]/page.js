import React from 'react'

const MealDetailsPage = (props) => {
    return (
        <div>
            <h1>post</h1>
            <div>
                {props.params.mealSlug}
            </div>
        </div>
    )
}

export default MealDetailsPage
