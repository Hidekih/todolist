import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors';

export default StyleSheet.create({
  button: {
    width: 280,
    height: 52,
    marginHorizontal: 18,
    borderRadius: 12,
    backgroundColor: Colors.background_primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: Colors.title,
  }
});
