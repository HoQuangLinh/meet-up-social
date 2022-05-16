import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import { TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]} />
);
const ThirdRoute = () => (
    <View style={[styles.scene, { backgroundColor: 'white' }]} />
);
const ForthRoute = () => (
<View style={[styles.scene, { backgroundColor: 'white' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  forth: ForthRoute
});

export default function TabViewHome() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'All' },
    { key: 'second', title: 'Going' },
    { key: 'third', title: 'Saved' },
    { key: 'forth', title: 'Past' },
  ]);

  return (
    <TabView
    navigationState={{ index, routes }}
    renderTabBar={props => (
      <TabBar
        {...props}
        renderLabel={({ route, color }) => (
          <Text style={{ color: 'black', margin: 8 }}>
            {route.title}
          </Text>
        )}
        indicatorStyle={{ backgroundColor: 'black' }}
        style={{backgroundColor: 'white', borderBottomColor:'#ccc', borderBottomWidth: 1}}
       
      />
    )}
    renderScene={renderScene}
    onIndexChange={setIndex}
    initialLayout={initialLayout}
    style={styles.container}

    />
    
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,

  },
  scene: {
    flex:1,
    

  },
});