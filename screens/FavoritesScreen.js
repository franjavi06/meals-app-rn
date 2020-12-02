import React from 'react'
import { MEALS } from '../data/dummy-data'
import MealList from '../components/MealList'
import Colors from '../constants/Colors'

const FavoritesScreen = (props) => {
    
    const favMeals = MEALS.filter( meal => meal.id==='m1' || meal.id==='m2')

    return (
        <MealList listData={favMeals} navigation={props.navigation}/>
    )
}

FavoritesScreen.navigationOptions = {
    headerTitle: 'Your Favorites',
    headerStyle: {
        backgroundColor: Colors.accentColor
    }    
}

export default FavoritesScreen
