import { StyleSheet } from 'react-native';
import { coolors } from './common.style';

export const home = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: coolors.black,
  },
  title: {
    width: '100%',
    fontSize: 20,
    textAlign: 'left',
    color: coolors.white,
    fontFamily: 'OpenSans_600SemiBold'
  },
  inputName: {
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: coolors.white,
    borderRadius: 8,
  },
  nextButton: {
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: coolors.green,
    borderRadius: 5,
  },
  nextButtonText: {
    color: coolors.white,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold'
  }
})