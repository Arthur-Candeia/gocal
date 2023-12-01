import {View, Text, TouchableOpacity, Alert } from 'react-native'
import {useNavigation} from "@react-navigation/native"
import { form as styles } from '@styles'
import { useMainContext } from '../../contexts/MainContext'

export function ButtonsForm() {
  const navigation = useNavigation<{navigate: (a: string) => void, goBack: () => void}>()
  const {gender, age, weight, height} = useMainContext()

  function handleNext() {
    if (!gender || gender === 'X' || !age || !weight || !height) return Alert.alert('Campos inválidos', 'Preencha todos os campos para continuar')
    navigation.navigate('Result')
  }

  return (
    <View style={{marginTop: 20}}>
      <TouchableOpacity
      activeOpacity={0.8}
      style={styles.nextButton}
      onPress={handleNext}
      >
        <Text style={styles.nextButtonText}>
          Avançar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
      activeOpacity={0.8}
      style={styles.prevButton}
      onPress={() => navigation.goBack()}
      >
        <Text style={styles.prevButtonText}>
          Voltar
        </Text>
      </TouchableOpacity>
    </View>
  )
}