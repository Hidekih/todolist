import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors';

export default StyleSheet.create({
  modalContent: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 40,
  },
  modalTitle: {
    fontSize: 20,
    color: Colors.title,
    fontFamily: 'Roboto',
    fontWeight: '700',
    marginTop: 18,
  },
  modalInput: {
    marginTop: 18,
  },
  modalSelectImportantButtonsContainer: {
    flexDirection: 'row',
    marginTop: 18,
  },
  modalSelectImportantButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 88,
    height: 32,
    marginHorizontal: 18,
    borderColor: Colors.title,
    borderWidth: 2,
    borderRadius: 8,
  },
  modalSelectImportantButtonNotSelected: {
    opacity: 0.4,
  },
  modalSelectImportantButtonText: {
    fontSize: 18,
    fontWeight: '500',
  },
  modalSubmitButton: {
    marginTop: 18,
  },
})