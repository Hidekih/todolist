import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center'
  },
  image: {
    marginHorizontal: 18,
  },
  title: {
    marginTop: 24,
    fontSize: 22,
    color: Colors.title,
    textAlign: 'center',
    fontWeight: '700',
  },
  text: {
    marginTop: 8,
    fontSize: 20,
    color: '#222222',
    textAlign: 'center',
    marginHorizontal: 18,
  },
  input: {
    marginTop: 24,
  },
  button: {
    marginTop: 24,
  }
});
