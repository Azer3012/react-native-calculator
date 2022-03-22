import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CalcDisplay = ({display}) => {

    console.log({display});
  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>
    </View>
  )
}

export default CalcDisplay

const styles = StyleSheet.create({
    container:{
        padding: 20
    },
    display: {
        fontSize:70,
        color: 'white',
        textAlign:'right'
    }
})