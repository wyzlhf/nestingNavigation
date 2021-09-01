import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import One from "./screens/one/one";
import Two from "./screens/two/two";
import Onedetail from "./screens/one/onedetail";
import Twodetail from "./screens/two/twodetail";
import BotttomTab from "./navigations";
import StackRouter from "./navigations";
import Navigation from "./navigations";

export default class Index extends Component {
	render() {
		return (
			<Navigation/>
		)
	}
}
