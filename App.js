import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Calculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('');

  const handleOperation = (op) => {
    setOperation(op);
  };

  const handleCalculate = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    let finalResult = 0;

    switch(operation) {
      case 'add':
        finalResult = num1 + num2;
        break;
      case 'subtract':
        finalResult = num1 - num2;
        break;
      case 'multiply':
        finalResult = num1 * num2;
        break;
      default:
        finalResult = 0;
    }

    setResult(finalResult.toString());
    setNumber1('');
    setNumber2('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Mini Calculator</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setNumber1(text)}
        value={number1}
        keyboardType="numeric"
        placeholder="Enter number 1"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setNumber2(text)}
        value={number2}
        keyboardType="numeric"
        placeholder="Enter number 2"
      />
      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={() => handleOperation('add')} />
        <Button title="Subtract" onPress={() => handleOperation('subtract')} />
        <Button title="Multiply" onPress={() => handleOperation('multiply')} />
      </View>
      <Button title="Calculate" onPress={handleCalculate} />
      {result !== '' && <Text style={styles.result}>Result: {result}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor:'black'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '70%',
    height: 40,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 2,
    paddingHorizontal: 10,
    backgroundColor:'white'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    borderRadius:20,
    marginBottom: 10,
    
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    borderRadius:50,
    fontWeight: 'bold',
    color:'white'
  },
});

export default Calculator;

