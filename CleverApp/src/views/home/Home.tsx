import React, {useEffect, useState} from 'react'
import { View , Text} from 'react-native'
import styles from './Styles';
import { RoundedButton } from '../../../src/components/RoundedButton';

export const HomeScreen = () => {
  const [selected, setSelected] = useState('');
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [level, setLevel] = useState(1);
  const [words, setWords] = useState(['manzana', 'banana', 'pera', 'naranja', 'uva', 'kiwi']);

  useEffect(() => {
    getWords();
  }, []);

  const wordRandom = () => {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
  };  
  const [boton1, setBoton1] = useState(wordRandom());
  const [boton2, setBoton2] = useState(wordRandom());
  const [boton3, setBoton3] = useState(wordRandom());
  const [boton4, setBoton4] = useState('JQuery');

  const getWords = () => {
    setBoton1(wordRandom());
    setBoton2(wordRandom());
    setBoton3(wordRandom());
    setBoton4(wordRandom());

    const position = Math.floor(Math.random() * 3) + 1;
    if (position == 1) {
      setBoton1('jQuery');
    } else if (position == 2) {
      setBoton2('jQuery');
    } else if (position == 3) {
      setBoton3('jQuery');
    } else {
      setBoton4('jQuery');
    }
  };

  const point = () => {
    if (level === 1) { return 1; }
    if (level === 2) { return 2; }
    if (level === 3) { return 4; }
    if (level === 4) { return 8; }
    if (level === 5) { return 16; }
    if (level === 6) { return 32; }
    if (level === 7) { return 64; }
    if (level === 8) { return 128; }
    if (level === 9) { return 256; }
    if (level === 10) { return 512; }
    return 0;
  }; 

  const calculateScore = (option:string) => {
    setSelected(option)
    if (option === 'jQuery') {
      setCorrect((prev) => prev + 1);
      if (correct % 3 === 0 && correct > 0) {
        setLevel((prev) => prev + 1);
      }
      setScore((prev) => prev + point());      
      setIncorrect(0);
    } else {      
      if (score > 0) {
        setScore(score - 1);
      }
      setCorrect(0);
      setIncorrect((prev) => prev + 1);
      if (incorrect >= 2) {
        setIncorrect(0);
        setScore(0);
      }
    }
    getWords();
  };

  return (
    <View style={styles.container}>
        <View style={{marginTop:30, marginLeft: 30}}>
            <Text style={{ color:'white' }}>Palabra seleccionada: {selected}</Text>
            <Text style={{ color:'white' }}>Score: {score}</Text>
            <Text style={{ color:'white' }}>Level: {level}</Text>
            <Text style={{ color:'white' }}>Point: {point()}</Text>
            <Text style={{ color:'white' }}>Correct: {correct}</Text>
            <Text style={{ color:'white' }}>Incorrect: {incorrect}</Text>
        </View>

        <View style={{marginTop:30}}>
            <RoundedButton text={ boton1 } onPress={()=>{
                calculateScore( boton1 )
            }} />
        </View>

        <View style={{marginTop:30}}>
            <RoundedButton text={boton2} onPress={()=>{
                calculateScore(boton2)               
            }} />
        </View>

        <View style={{marginTop:30}}>
            <RoundedButton text={boton3} onPress={()=>{
                calculateScore(boton3)               
            }} />
        </View>

        <View style={{marginTop:30}}>
            <RoundedButton text={boton4} onPress={()=>{
                calculateScore(boton4)
            }} />
        </View>
    </View>
  );
}