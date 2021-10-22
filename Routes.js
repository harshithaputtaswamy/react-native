import React from 'react';
import LoginPage from './components/LoginPage';
import UserBooks from './components/UserBooks';
import ReadBook from './components/ReadBook';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const routes = [
    {
        name: 'Login',
        initial: true,
        component: LoginPage,
        title: 'Login',
    },
    {
        name: 'UserBooks',
        initial: false,
        component: UserBooks,
        title: 'Books',
    },
    {
        name: 'ReadBook',
        initial: false,
        component: ReadBook,
        title: 'Read',
    },
]

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator>
            {
                routes.map((route, idx) => {
                    return (
                        <Stack.Screen
                            key = {idx}
                            name={route.name}
                            options={{ title: route.title }}
                            component={route.component}
                        />
                    )
                })
            }
        </Stack.Navigator>
    </NavigationContainer>
)
export default Routes