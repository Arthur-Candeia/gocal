import {View, Text} from 'react-native'
import { result as styles } from '@styles'
import { ShowInfos } from '../components/Result/ShowInfos'
import { ButtonResult } from '../components/Result/ButtonResult'

export function Result() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aqui está o seu</Text>
      <Text style={[styles.title, styles.titleGreen]}>Resultado</Text>
      <View style={{width: '100%'}}>
        <ShowInfos />
      </View>
      <ButtonResult />
    </View>
  )
}