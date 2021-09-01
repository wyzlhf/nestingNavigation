import React, {Component} from 'react';
import {View, Text} from 'react-native';
import One from "../one/one";
import Onedetail from "../one/onedetail";
import Two from "./two";
import Twodetail from "./twodetail";

export default class Tworouter extends Component {
	render() {
		return (
			<Stack.Navigator>
				<Stack.Group screenOptions={{ presentation: 'modal' }}>
					<Stack.Screen name="Two" component={Two} />
					<Stack.Screen name="Twodetail" component={Twodetail} />
				</Stack.Group>
			</Stack.Navigator>
		)
	}
}
