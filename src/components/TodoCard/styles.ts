import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 8,
    marginBottom: 10,
    marginHorizontal: 18,
    height: 68,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: Colors.red,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  bgGradient: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 12,
  },
  card: {
    height: 68,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    color: Colors.title,
    fontFamily: 'Roboto',
    fontSize: 18,
  },
  actionContainer: {
    width: 68,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
