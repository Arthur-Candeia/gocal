import {View, Text} from 'react-native'
import { FlatList } from "react-native-gesture-handler";
import { useMainContext } from "../../contexts/MainContext";
import { getInfosList } from "../../utilities/infosList";
import { ItemProps } from '../../interfaces/ItemProps';
import { result as styles } from '@styles'

export function ShowInfos() {
  const {weight, height} = useMainContext()
  const list = getInfosList({weight, height})

  function renderItem({item}: ItemProps) {
    return (
      <View style={styles.marginBottom}>
        <Text style={[styles.text, {flexDirection: 'row'}]}>
        {item.init}
        <Text style={[styles.text, styles.boldText]}>{item.first}</Text>
        {item.second}
        </Text>
        {item.third && <Text style={[styles.text, styles.greenText]}>{item.third}</Text>}
      </View>
    )
  }

  return <FlatList data={list} renderItem={renderItem} keyExtractor={(item, index) => String(index)}/>
}