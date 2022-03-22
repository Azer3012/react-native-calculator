import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useCallback,useMemo,useEffect} from 'react'
import CalcButton from '../components/CalcButton';
import CalcDisplay from '../components/CalcDisplay';





require("../lib/swisscalc.lib.format.js")
require("../lib/swisscalc.lib.operator.js")
require("../lib/swisscalc.lib.operatorCache.js")
require("../lib/swisscalc.lib.shuntingYard.js")
require("../lib/swisscalc.display.numericDisplay.js")
require("../lib/swisscalc.display.memoryDisplay.js")




require("../lib/swisscalc.calc.calculator.js")




const CalculatorScreen = () => {

  var oc = global.swisscalc.lib.operatorCache;
  var calc = new global.swisscalc.calc.calculator();
 
	
  const [display, setDisplay] = useState('0');

 
  //add Number 
  const onDigitPress=useCallback((digit)=>{
    calc.addDigit(digit)
      let val=calc.getMainDisplay()

      setDisplay(val)
  },[])



  //clear display
  const onClearPress=useCallback(()=>{
    calc.clear()

    let val=calc.getMainDisplay()
    setDisplay(val)
  },[])

  


  //plus minus 
  const onPlusMinusPress=useCallback(()=>{
    calc.negate()
    let val=calc.getMainDisplay()
    setDisplay(val)
  },[])


  //operators
  const onBinaryOperatorPress=useCallback((operator)=>{
    calc.addBinaryOperator(operator)
    let val=calc.getMainDisplay()
    setDisplay(val)
  },[])

  //percent
  const onUnaryOperatorPress=useCallback((operator)=>{
    calc.addUnaryOperator(operator)
    let val=calc.getMainDisplay()
    setDisplay(val)
  },[])



  //equal
  const equalsPress=useCallback(()=>{
    calc.equalsPressed();
    let val=calc.getMainDisplay()
    setDisplay(val)
  },[])


  return (
    <View style={styles.app}>
    <View style={styles.displayContainer}>
      <CalcDisplay display={display} />
    </View>
    <View style={styles.buttonContainer}>
      <View style={styles.buttonRow}>
        <CalcButton onPress={onClearPress} title="C" color="white" bg="#D7CCC8" />
        <CalcButton onPress={onPlusMinusPress} title="+/-" color="white" bg="#D7CCC8" />
        <CalcButton onPress={()=>onUnaryOperatorPress(oc.PercentOperator)} title="%" color="white" bg="#D7CCC8" />
        <CalcButton onPress={()=>onBinaryOperatorPress(oc.DivisionOperator)} title="/" color="white" bg="#795548" />
      </View>
      <View style={styles.buttonRow}>
        <CalcButton onPress={()=>onDigitPress("7")} title="7" color="white" bg="#607D8B" />
        <CalcButton onPress={()=>onDigitPress("8")} title="8" color="white" bg="#607D8B" />
        <CalcButton onPress={()=>onDigitPress("9")} title="9" color="white" bg="#607D8B" />
        <CalcButton onPress={()=>onBinaryOperatorPress(oc.MultiplicationOperator)}  title="*" color="white" bg="#795548" />
      </View>
      <View style={styles.buttonRow}>
        <CalcButton onPress={()=>onDigitPress("4")} title="4" color="white" bg="#607D8B" />
        <CalcButton onPress={()=>onDigitPress("5")} title="5" color="white" bg="#607D8B" />
        <CalcButton onPress={()=>onDigitPress("6")} title="6" color="white" bg="#607D8B" />
        <CalcButton onPress={()=>onBinaryOperatorPress(oc.SubtractionOperator)} title="-" color="white" bg="#795548" />
      </View>
      <View style={styles.buttonRow}>
        <CalcButton onPress={()=>onDigitPress("1")} title="1" color="white" bg="#607D8B" />
        <CalcButton onPress={()=>onDigitPress("2")} title="2" color="white" bg="#607D8B" />
        <CalcButton onPress={()=>onDigitPress("3")} title="3" color="white" bg="#607D8B" />
        <CalcButton onPress={()=>onBinaryOperatorPress(oc.AdditionOperator)} title="+" color="white" bg="#795548" />
      </View>
      <View style={styles.buttonRow}>
        <CalcButton onPress={()=>onDigitPress("0")} title="0" color="white" bg="#607D8B" />
        <CalcButton onPress={()=>onDigitPress(".")} title="." color="white" bg="#607D8B" />
        <CalcButton onPress={equalsPress} title="=" color="white" bg="#795548" />
      </View>
    </View>
  </View>
  )
}

export default CalculatorScreen

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor:'black'
  },
  displayContainer: {
    flex: 1,
    justifyContent:'flex-end'
  },
  buttonContainer:{
    paddingBottom:30
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})