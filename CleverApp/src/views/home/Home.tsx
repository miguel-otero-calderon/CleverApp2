import React, {useState} from 'react'
import { View , Text} from 'react-native'
import styles from './Styles';
import { RoundedButton } from '../../../src/components/RoundedButton';
import { WordRandom } from '../../components/WordRandom';

export const HomeScreen = () => {
  const values = getWords();
  const [wordTap, setWordTap] = useState('');
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const getProcess = (option:string) => {
    setWordTap(option)
    if (option == 'jQuery') {
      setScore(correctCount >= 3 ? score + 2 : score + 1);
      setCorrectCount(correctCount + 1);
      setIncorrectCount(0);
    } else {      
      if (score > 0) {
        setScore(score - 1);
      }
      setCorrectCount(0);
      setIncorrectCount(incorrectCount + 1);
      if (incorrectCount >= 2) {
        setIncorrectCount(0);
        setScore(0);
      }
    }
    console.log(option);
    console.log(score);
    console.log(correctCount);
    console.log(incorrectCount);
  };

  return (
    <View style={styles.container}>
        <View style={{marginTop:30}}>
            <Text style={{ color:'white' }}>Word Selection: {wordTap}</Text>
            <Text style={{ color:'white' }}>Score: {score}</Text>
            <Text style={{ color:'white' }}>Score correct: {correctCount}</Text>
            <Text style={{ color:'white' }}>Score incorrect: {incorrectCount}</Text>
        </View>

        <View style={{marginTop:30}}>
            <RoundedButton text={ values[0] } onPress={()=>{
                getProcess(values[0])
            }} />
        </View>

        <View style={{marginTop:30}}>
            <RoundedButton text={values[1]} onPress={()=>{
                getProcess(values[1])               
            }} />
        </View>

        <View style={{marginTop:30}}>
            <RoundedButton text={values[2]} onPress={()=>{
                getProcess(values[2])               
            }} />
        </View>

        <View style={{marginTop:30}}>
            <RoundedButton text={values[3]} onPress={()=>{
                getProcess(values[3])
            }} />
        </View>
    </View>
  );
}
const getWords = () => {
    const values = [
        WordRandom(), 
        WordRandom(), 
        WordRandom(), 
        WordRandom()
      ];

    const exist = existJQuery(values);

    if (!exist) {
        const indexJQuery = Math.floor(Math.random() * 3);
        values[indexJQuery] = 'jQuery';
    }

    return values;
  };

  function existJQuery(array: string[]): boolean {
    for (const item of array) {
      const itemMinusculas = item.toLowerCase();
  
      if (itemMinusculas.includes('jquery')) {
        return true;
      }
    }
    return false;
  };