import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors';

export default StyleSheet.create({
  header: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    height: 56,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.title,
  },
  headerButton: {
    width: 32,
    height: 32,
  },
  bold: {
    fontWeight: '700',
  },
});