import React from 'react';
import { TouchableOpacity, Text, View, FlatList } from 'react-native';
import { s } from '../../utils/scale';
import styles from './style';
import TopFilters from './topFilters';
import BottomFilters from './bottomFilters';

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

function HeaderFilters({ label, onPress }: { label: string, onPress?: any }) {
    return (
        <View>
           <TopFilters/>
           <BottomFilters/>
        </View>
    )
}

export default HeaderFilters;