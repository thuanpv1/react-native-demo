import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native'
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Container = styled.View`
 background-color: yellow;
 color: red;
 margin-top: 50px;
 margin-left: 24px;
 margin-right: 24px;
`

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <Container>
      <Text>The number of your clicked = {count}</Text>
      <StatusBar style="auto" />
      <Button
        title='Count'
        onPress={() => {
          console.log('running here')
          let test = count + 1
          setCount(test)
        }}
      ></Button>
    </Container>
  );
}
