import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const CalcButton = ({title,color,bg,onPress}) => {
  return (
  
      <TouchableOpacity onPress={onPress}  style={[styles.container,{backgroundColor:bg}]}>
        <Text style={[styles.text,{color:color}]}>{title}</Text>
      </TouchableOpacity>
   
  );
};

export default CalcButton;

const styles = StyleSheet.create({
    container:{
        width: 80,
        height: 80,
        backgroundColor:'',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:40,
        margin: 5
    },
    text:{
        fontSize:30,
        fontWeight:'bold'
        
    }
});
