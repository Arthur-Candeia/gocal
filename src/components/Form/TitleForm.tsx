import {Text} from 'react-native'
import { form as styles } from '@styles'
import { useMainContext } from '../../contexts/MainContext'

export function TitleForm() {
  const {name} = useMainContext()

  return (
    <>
      <Text style={styles.title}>Olá,</Text>
      <Text style={[styles.title, styles.titleGreen]}>{name}</Text>
      <Text style={styles.text}>Vamos calcular o seu IMC!</Text>
    </>
  )
}