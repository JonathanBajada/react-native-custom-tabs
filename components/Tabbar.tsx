import * as React from 'react';
import { useState } from 'react';
import { View, SafeAreaView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import * as shape from 'd3-shape';
import Tab from './Tab';
import StaticTabbar from './StaticTabbar';

const { width } = Dimensions.get('window');
const tabWidth = width / 5;
const height = 80;

const left = shape.line().x((d) => d.x).y((d) => d.y).curve(shape.curveBasis)([ { x: 0, y: 0 }, { x: width, y: 0 } ]);

const right = shape.line().x((d) => d.x).y((d) => d.y).curve(shape.curveBasis)([
	{ x: width, y: 0 },
	{ x: width, y: height },
	{ x: width, y: width },
	{ x: 0, y: width },
	{ x: 0, y: 0 }
]);

const center = shape.line().x((d) => d.x).y((d) => d.y).curve(shape.curveBasis)([
	{ x: 100, y: 0 },
	{ x: 130, y: 0 },
	{ x: tabWidth * 2 + 10, y: height * 0.63 },
	{ x: tabWidth * 3 - 10, y: height * 0.63 },
	{ x: 230, y: 0 },
	{ x: 250, y: 0 }
]);

const d = `${left} ${center} ${right}`;

const Tabbar = ({ state, navigation }) => {
	const [ selected, setSelected ] = useState('Home');
	const { routes } = state;
	const renderColor = (currentTab) => (currentTab === selected ? 'red' : 'black');

	console.log(routes);
	const handlePress = (activeTab, index) => {
		if (state.index !== index) {
			setSelected(activeTab);
			navigation.navigate(activeTab);
		}
	};

	return (
		<View>
			<View style={styles.wrapper}>
				<Svg width={width} {...{ height }}>
					<Path {...{ d }} fill="#F0F0F0" />
				</Svg>
			</View>

			<View style={styles.container}>
				{routes.map((route) => (
					<Tab
						icon={route.params.icon}
						tab={route}
						onPress={() => handlePress(route.name)}
						color={renderColor(route.name)}
						key={route.key}
					/>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		position: 'absolute'
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 80
	}
});

export default Tabbar;
