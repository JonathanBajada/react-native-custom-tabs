import * as React from 'react';
import { View, SafeAreaView, Dimensions, StyleSheet } from 'react-native';
import {Svg, Path} from 'react-native-svg';
import * as shape from 'd3-shape';

const tabs = [
    {name: "grid"},
    {name: "list"},
    {name: "refresh-cw"},
    {name: "refresh-cw"},
    {name: "user"},
];
const {width} = Dimensions.get("window");
const tabWidth = width / tabs.length;
const height = 64;


const tab = shape.line()
.x(d => d.x)
.y(d => d.y)
.curve(shape.curveBasis)
(
    [
        {x: width, y: 0},
        {x: width + 5, y: 0},
        {x: width + 10, y: 10},
        {x: width + 15, y: height},
        {x: width + tabWidth - 15, y: height},
        {x: width + tabWidth - 10, y: 10},
        {x: width + tabWidth - 5, y: 0},

    ]
)
const left = shape.line()
    .x( d => d.x)
    .y(d => d.y)
    .curve(shape.curveBasis)([
            {x: 0, y: 0},
            {x: width, y:0},
    ]);

const right = shape.line()
    .x( d => d.x)
    .y(d => d.y)
    .curve(shape.curveBasis)([
            {x: width + tabWidth, y:0},
            {x: width * 2, y: 0},
            {x: width * 2, y: height},
            {x:0, y: height},
            {x:0, y: 0}
    ]);

const d = `${left} ${tab} ${right}`;
interface TabbarProps {}

export default class Tabbar extends React.PureComponent<TabbarProps> {
	render() {
        return (
        <>
             <Svg >
                <Path {...{d}} fill="white"/>
            </Svg>
            <SafeAreaView style={styles.safeArea}/>
        </>
        )
	}
}

const styles = StyleSheet.create({
    safeArea : {
    backgroundColor: 'white'
    }
})
