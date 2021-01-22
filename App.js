import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProjectView from "./pages/ProjectView";

export default function App() {
  return (
    <View style={{...styles.container, backgroundColor: 'purple', height: '100%'}}>
      <Text variant="h5" style={{color: 'white', marginTop: 5}} align="center">Gestão de Projetos</Text>
      <ProjectView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
