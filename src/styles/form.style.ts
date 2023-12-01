import { StyleSheet } from 'react-native';
import { coolors } from './common.style';

export const form = StyleSheet.create({
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
    color: coolors.green
  },
  text: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'left',
    color: coolors.white,
    fontFamily: 'OpenSans_600SemiBold'
  },
  label: {
    color: coolors.white,
    fontSize: 14
  },
  inputName: {
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: coolors.white,
    borderRadius: 5,
  },
  select: {
    width: '100%',
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
  prevButton: {
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 2,
    borderColor: coolors.green,
    borderRadius: 5,
  },
  nextButtonText: {
    color: coolors.white,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold'
  },
  prevButtonText: {
    color: coolors.green,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold'
  }
})