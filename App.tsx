import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tabbar from './components/Tabbar';
import TabsUI from './components/navigator';
import MyTab from './components/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './components/TabNavigator';

export default function App() {
	return (
		<NavigationContainer>
			<TabNavigator />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'flex-end'
	}
});
