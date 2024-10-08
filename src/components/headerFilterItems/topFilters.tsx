import React from 'react';
import { TouchableOpacity, Text, View, FlatList } from 'react-native';
import { s } from '../../utils/scale';
import styles from './style';

const data = [
    {
        label: "All"
    },
    {
        label: "News"
    },
    {
        label: "Business"
    },
    {
        label: "Politics"
    },
    {
        label: "Innovation"
    },
]

function TopFilters() {
    return (
        <View>
            <FlatList
            style={{backgroundColor:"#585858"}}
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                    return (
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemText}>{item.label}</Text>
                        </View>

                    )
                }}
            />
        </View>
    )
}

export default TopFilters;