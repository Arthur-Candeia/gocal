import {View } from 'react-native'
import { InputsForm } from '../components/Form/InputsForm'
import { TitleForm } from '../components/Form/TitleForm'
import { PickerForm } from '../components/Form/PickerForm'
import { ButtonsForm } from '../components/Form/ButtonsForm'
import { form as styles } from '@styles'

export function Form() {

  return (
    <View style={styles.container}>
      <TitleForm/>
      <View style={{width: '100%'}}>
        <PickerForm />
        <InputsForm />
        <ButtonsForm />
      </View>
    </View>
  )
}