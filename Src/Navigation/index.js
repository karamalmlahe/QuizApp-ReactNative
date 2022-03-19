import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import LogoScreen, {screenOptions as LogoScreenOptions} from '../Screens/Logo';
import QuizScreen, {screenOptions as QuizScreenOptions} from '../Screens/Quiz';
import QuizResultScreen, {screenOptions as QuizResultScreenOptions} from '../Screens/Quiz/Result';
import QuizWrongAnswersScreen, {screenOptions as QuizWrongAnswersScreenOptions} from '../Screens/Quiz/WrongAnswers';

const StackNavigator = createStackNavigator();
export const Navigator = () => {
    return(
        <StackNavigator.Navigator>
            <StackNavigator.Screen name='Logo' component={LogoScreen} options={LogoScreenOptions} />
            <StackNavigator.Screen name='Quiz' component={QuizScreen} options={QuizScreenOptions} />
            <StackNavigator.Screen name='QuizResult' component={QuizResultScreen} options={QuizResultScreenOptions} />
            <StackNavigator.Screen name='QuizWrongAnswers' component={QuizWrongAnswersScreen} options={QuizWrongAnswersScreenOptions} />
        </StackNavigator.Navigator>
    )
}