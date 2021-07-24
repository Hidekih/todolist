import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
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
    marginHorizontal: 18,
    fontSize: 20,
    fontWeight: '700',
    color: Colors.title,
  }
});
