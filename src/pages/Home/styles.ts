import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.title,
  },
  bold: {
    fontWeight: '700',
  },
  noContent: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  listTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 18,
  },
  bottom: {
    alignItems: 'center',
    paddingVertical: 8,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    height: 68,
    marginHorizontal: 18,
    borderRadius: 12,
    backgroundColor: '#7C93B7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    marginRight: 18,
    fontSize: 20,
    fontWeight: '700',
    color: Colors.title,
  }
});