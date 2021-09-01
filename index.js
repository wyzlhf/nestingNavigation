import React, {Component} from 'react';
import {View, Text,Image} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

import One from "../screens/one/one";
import Onedetail from "../screens/one/onedetail";
import Two from "../screens/two/two";
import Twodetail from "../screens/two/twodetail";
import Onerouter from "../screens/one/onerouter";
import Tworouter from "../screens/two/tworouter";

export default class Navigation extends Component{
	render() {
		return(
			<NavigationContainer>
				<StackRouter/>
			</NavigationContainer>
		)
	}
}

const Stack=createNativeStackNavigator()
class StackRouter extends Component{
	render() {
		return(
			<Stack.Navigator>
				<Stack.Screen name="Root" component={BotttomTab} options={{ headerShown: false }} />
				<Stack.Group screenOptions={{ presentation: 'modal' }}>
					<Stack.Screen name="Onedetail" component={Onedetail} />
					<Stack.Screen name="Twodetail" component={Twodetail} />
				</Stack.Group>
			</Stack.Navigator>
		)
	}
}
// function StackRouter(){
// 	return(
// 		<Stack.Navigator>
// 			<Stack.Screen name="Root" component={BotttomTab} options={{ headerShown: false }} />
// 			<Stack.Group screenOptions={{ presentation: 'modal' }}>
// 				<Stack.Screen name="Onedetail" component={Onedetail} />
// 				<Stack.Screen name="Twodetail" component={Twodetail} />
// 			</Stack.Group>
// 		</Stack.Navigator>
// 	)
// }
// function StackRouter(){
// 	return(
// 		<Stack.Navigator>
// 			<Stack.Screen name="Root" component={BotttomTab} options={{ headerShown: false }} />
// 			<Stack.Screen name="Onerouter" component={Onerouter} />
// 			<Stack.Screen name="Tworouter" component={Tworouter} />
// 		</Stack.Navigator>
// 	)
// }

const Tab=createBottomTabNavigator()
// 使用@expo/vector-icons作为底部tab图标
// function BotttomTab(){
// 	return(
// 		<Tab.Navigator
// 			screenOptions={({ route }) => ({
// 				tabBarIcon: ({ focused, color, size }) => {
// 					let iconName;
//
// 					if (route.name === 'One') {
// 						iconName = focused
// 							? 'ios-information-circle'
// 							: 'ios-information-circle-outline';
// 					} else if (route.name === 'Two') {
// 						iconName = focused ? 'menu' : 'menu-outline';
// 					}
//
// 					// You can return any component that you like here!
// 					return <Ionicons name={iconName} size={size} color={color} />;
// 				},
// 				tabBarActiveTintColor: 'tomato',
// 				tabBarInactiveTintColor: 'gray',
// 			})}
// 		>
// 			<Tab.Screen name="One" component={One} />
// 			<Tab.Screen name="Two" component={Two} />
// 		</Tab.Navigator>
// 	)
// }

// 自定义底部tab图标
function BotttomTab(){
	return(
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'One') {
						iconName = focused
							? (<Image source={ require('../images/home.png') } style={{ width: 25, height: 25, }} />)
							: (<Image source={ require('../images/home-outline.png') } style={{ width: 25, height: 25, }} />);
					} else if (route.name === 'Two') {
						iconName = focused
							?(<Image source={ require('../images/my.png') } style={{ width: 25, height: 25, }} />)
							: (<Image source={ require('../images/my-outline.png') } style={{ width: 25, height: 25, }} />);
					}

					// You can return any component that you like here!
					return iconName
				},
				tabBarActiveTintColor: 'tomato',
				tabBarInactiveTintColor: 'gray',
			})}
		>
			<Tab.Screen name="One" component={One} />
			<Tab.Screen name="Two" component={Two} />
		</Tab.Navigator>
	)
}
