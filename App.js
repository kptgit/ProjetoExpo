import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';

const oi = () =>{
  return (
    <ScrollView>
      <View>
        <Text
    style={{
      fontsize: 45,
      alignSelf: "center",
      color:"green",
    }}
    >
    teste
    </Text>
    {/* <Image source={{URL"https://www.magazineluiza.com.br/adaptador-wireless-usb-2-0-d-link-dwa-123/p/hf4cf3c585/in/apwf/"}}> </Image>  */}
    </View>
    </ScrollView>
  )};
  


export default function App() {
  return (
    <View style={styles.container}>
      <Text>AII QUE LINDOOOOOOOOOOOOOOOOOO</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
