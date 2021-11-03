
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import rootReducer from "./stores/rootReducer";

import { MainLayout } from './screens'
import CustomDrawer from "./navigation/CustomDrawer";
import {
    FoodDetail,
    Checkout,
    MyCard,
    MyCart,
    Success,
    AddCard,
    DeliveryStatus,
    Home,
    Map,
    OnBoarding,
    SignIn,
    SignUp,
    Otp,
    ForgotPassword,
    AuthLayout
} from './screens'
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

const Stack = createStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                {/* <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                 <Stack.Screen
                name="FoodDetail"
                component={FoodDetail}
                />
                <Stack.Screen
                    name="Home"
                    component={CustomDrawer}
                />
               
            </Stack.Navigator> */}
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName={'Home'}
                >
                    {/* <Stack.Screen
                        name="OnBoarding"
                        component={OnBoarding}
                    />

                    <Stack.Screen
                        name="SignIn"
                        component={SignIn}
                    /> */}
{/* 
                    <Stack.Screen
                        name="SignUp"
                        component={SignUp}
                    />

                    <Stack.Screen
                        name="ForgotPassword"
                        component={ForgotPassword}
                    /> */}

                    {/* <Stack.Screen
                        name="Otp"
                        component={Otp}
                    /> */}
                    <Stack.Screen
                        name="Home"
                        component={CustomDrawer}
                    />

                    <Stack.Screen
                        name="FoodDetail"
                        component={FoodDetail}
                    />

                    <Stack.Screen
                        name="Checkout"
                        component={Checkout}
                    />

                    <Stack.Screen
                        name="MyCart"
                        component={MyCart}
                    />

                    <Stack.Screen
                        name="Success"
                        component={Success}
                        options={{ gestureEnabled: false }}
                    />

                    <Stack.Screen
                        name="AddCard"
                        component={AddCard}
                    />

                    <Stack.Screen
                        name="MyCard"
                        component={MyCard}
                    />

                    <Stack.Screen
                        name="DeliveryStatus"
                        component={DeliveryStatus}
                        options={{ gestureEnabled: false }}
                    />

                    <Stack.Screen
                        name="Map"
                        component={Map}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App