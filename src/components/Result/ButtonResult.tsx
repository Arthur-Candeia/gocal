import { Text, TouchableOpacity } from 'react-native'
import {useNavigation} from "@react-navigation/native"
import { result as styles } from '@styles'
import { useMainContext } from '../../contexts/MainContext'

export function ButtonResult() {
  const navigation = useNavigation<any>()
  const {resetProps} = useMainContext()
  
  function handleReset() {
    navigation.reset({index: 0, routes: [{name: 'Home'}]})
    resetProps()
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.prevButton}
      onPress={handleReset}
      >
        <Text style={styles.prevButtonText}>
          Voltar
        </Text>
    </TouchableOpacity>
  )
}