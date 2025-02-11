/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={{width: 200}}>
        <Text style={{color: 'green'}}>default: </Text>
        <Text style={{backgroundColor: 'yellow'}}>
          Some long very very very very very long text
        </Text>

        <Text>-------------</Text>

        <Text style={{color: 'green'}}>not selectable: </Text>
        <Text numberOfLines={1} style={{backgroundColor: 'yellow'}}>
          Some long very very very very very long text
        </Text>

        <Text>-------------</Text>

        <Text style={{color: 'red'}}>selectable (issue): </Text>
        <Text
          selectable={true}
          numberOfLines={1}
          style={{backgroundColor: 'yellow'}}>
          Some long very very very very very long text
        </Text>
        <View style={{height: 20, backgroundColor: 'pink'}}></View>
      </View>
    </SafeAreaView>
  );
}

export default App;
