import {StyleSheet} from 'react-native';
import {s, vs} from '../../utils/scale';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#754cf1',
  },
  imageContainer: {
    backgroundColor: '#754cf1',
    zIndex: s(10),
    alignItems: 'center',
  },
  image: {
    zIndex: s(12),
    position: 'relative',
    top: vs(85),
    width: s(400),
    height: vs(500),
  },
  parabla: {position: 'relative', top: vs(-391)},
  dotImage: {
    position: 'absolute',
    top: vs(-10),
    left: s(0),
    zIndex: s(11),
    width: s(260),
    height: vs(300),
  },
  secContainer: {
    position: 'absolute',
    bottom: vs(50),
    left: '22%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secTextView: {
    width: s(200),
  },
  secText: {
    fontSize: s(25),
    color: '#000',
    marginVertical: s(10),
    fontWeight: '800',
    textAlign: 'center',
  },
  secButton: {
    backgroundColor: '#3e2b77',
    borderRadius: s(100),
    paddingHorizontal: s(20),
    paddingVertical: vs(6),
  },
  secButtonText: {
    color: '#fff',
    fontSize: s(35),
  },
});

export default styles;
