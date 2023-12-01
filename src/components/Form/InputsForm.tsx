import {TextInput} from 'react-native';
import { form as styles } from '@styles'
import { useMainContext } from '../../contexts/MainContext';
import { tranformStringInNumber } from '../../utilities/tranformStringInNumber';


export function InputsForm() {
  
  const {age, weight, height, setAge, setWeight, setHeight} = useMainContext()
  
  function handleAgeChange(input: string) {
    setAge(() => tranformStringInNumber(input))
  }

  function handleWeightChange(input: string) {
    setWeight(() => tranformStringInNumber(input))
  }

  function handleHeightChange(input: string) {
    setHeight(() => tranformStringInNumber(input))
  }

  return (
    <>
      <TextInput placeholder="Sua idade" value={age ? String(age) : ''} onChangeText={(ev) => handleAgeChange(ev)} cursorColor="#37B874" keyboardType='numeric' style={styles.inputName}/>
        <TextInput placeholder="Seu peso (kg)" value={weight ? String(weight) : ''} onChangeText={(ev) => handleWeightChange(ev)} cursorColor="#37B874" keyboardType='numeric' style={styles.inputName}/>
        <TextInput placeholder="Sua altura (cm)" value={height ? String(height) : ''} onChangeText={(ev) => handleHeightChange(ev)} cursorColor="#37B874" keyboardType='numeric' style={styles.inputName}/>
    </>
  )
}