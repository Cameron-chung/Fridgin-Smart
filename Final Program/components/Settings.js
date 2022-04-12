import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'About App',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbdwd91aa97f34342343',
    title: 'Inside your Fridge',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f34342343',
    title: 'Sign in',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Location',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53423434abb28ba',
    title: 'Contact Us',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa95345347f63',
    title: 'Terms of Use',
  },

];

const Item = ({ title }) => (
  <View style={styles.item}>
    <TouchableOpacity
    onPress={()=> {}}
  >
    <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

export const SettingsScreen = () => {

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (

      <SafeAreaView style={styles.container}> 
      
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> 
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    fontSize: 14,
    height: 60,
    backgroundColor: "rgba(247,247,247,1.0)",
    borderRadius: 10,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 32,
  },
});