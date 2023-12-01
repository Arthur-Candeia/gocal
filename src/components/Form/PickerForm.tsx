import {Picker} from '@react-native-picker/picker'
import { form as styles } from '@styles'
import { useMainContext } from '../../contexts/MainContext'

export function PickerForm() {
  const {gender, setGender} = useMainContext()
  
  return (
    <Picker mode='dropdown' style={styles.select} selectedValue={gender} onValueChange={(itemValue, itemIndex) => setGender(itemValue !== 'X' ? itemValue : 'M')}>
      <Picker.Item label='Seu sexo' value='X' enabled/>
      <Picker.Item label='Masculino' value='M'/>
      <Picker.Item label='Feminino' value='F'/>
    </Picker>
  )
}