import { StyleSheet } from 'react-native';
import { coolors } from './common.style';

export const result = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: coolors.black,
  },
  title: {
    width: '100%',
    fontSize: 30,
    textAlign: 'left',
    color: coolors.white,
    fontFamily: 'OpenSans_800ExtraBold'
  },
  titleGreen: {
    marginBottom: 40,
    color: coolors.green
  },
  text: {
    width: '100%',
    fontSize: 20,
    textAlign: 'left',
    color: coolors.white,
    fontFamily: 'OpenSans_600SemiBold'
  },
  marginBottom: {
    marginBottom: 20
  },
  boldText: {
    fontFamily: 'OpenSans_800ExtraBold',
    color: 'white'
  },
  greenText: {
    color: coolors.green
  },
  label: {
    color: coolors.white,
    fontSize: 14
  },
  prevButton: {
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: coolors.green,
    borderRadius: 5,
  },
  prevButtonText: {
    color: coolors.white,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold'
  }
})