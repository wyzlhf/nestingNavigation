import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import One from "./one";
import Onedetail from "./onedetail";
import Two from "../two/two";
import Twodetail from "../two/twodetail";

const Stack=createNativeStackNavigator()
export default class Onerouter extends Component {
	render() {
		return (
			<Stack.Navigator>
				<Stack.Group screenOptions={{ presentation: 'modal' }}>
					<Stack.Screen name="One" component={One} />
					<Stack.Screen name="Onedetail" component={Onedetail} />
				</Stack.Group>
			</Stack.Navigator>
		)
	}
}
