import {StyleSheet} from 'react-native';
import {s, vs} from '../../utils/scale';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#754cf1',
  },
  itemContainer:{
    padding:5,
    minWidth:s(80),
    borderRightWidth:0.444,
    borderColor:"#777"
  },
  itemText:{
    color:"#fff",
    fontSize:s(14),
    alignSelf:'center',
    marginLeft:s(2)
  }
});

export default styles;
