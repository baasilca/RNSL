import React from 'react';
import { TouchableOpacity, Text, View, FlatList } from 'react-native';
import { s } from '../../utils/scale';
import styles from './style';

const data = [
    {
        label: "UNION BUDGET"
    },
    {
        label: "UNION BUDGET"
    },
    {
        label: "UNION BUDGET"
    },
]

function BottomFilters() {
    return (
        <View style={{backgroundColor:"#F0F0F0"}}>
            <FlatList
            style={{height:s(50)}}
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                    return (
                        <View style={{backgroundColor:"#fff",alignSelf:"center",padding:5,borderRadius:30,marginLeft:s(30),minWidth:s(90)}}>
                            <Text style={{color:"#000",fontSize:s(10),alignSelf:'center'}}>{item.label}</Text>
                        </View>

                    )
                }}
            />
        </View>
    )
}

export default BottomFilters;