import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native'
import { home as styles } from '@styles'
import { useState } from 'react'
import { useMainContext } from '../contexts/MainContext'
import {useNavigation} from '@react-navigation/native'

export function Home() {
  
  const {name, setName} = useMainContext()
  const [nameInput, setNameInput] = useState(name)
  const navigation = useNavigation<{navigate: (a: string) => void}>()


  function handleSubmit() {
    if (!nameInput.trim() || nameInput.trim().length < 3) return Alert.alert('Valor inválido', 'Por favor, digite o seu nome.')

    setName(nameInput)
    navigation.navigate('Form')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Para começar{'\n'}como podemos te chamar?
      </Text>
      <TextInput autoCorrect={false} style={styles.inputName} selectionColor="#37B874" placeholder='Digite o seu nome' value={nameInput} onChangeText={(ev) => setNameInput(ev)}/>
      <TouchableOpacity onPress={handleSubmit} activeOpacity={0.8} style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  )
}