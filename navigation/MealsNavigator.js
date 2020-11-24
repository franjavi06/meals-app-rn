import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import Colors from '../constants/Colors';


const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
    },
    {
        defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'white'
        }
    }
)

export default createAppContainer(MealsNavigator)