import React, {memo, useEffect, useState} from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import styles from './style';
import {Svg, Path} from 'react-native-svg';
import {useAppSelector} from '../../slice/store';
import {onAddSuccess} from '../../App';
import {debounce} from 'lodash';
import Header from '../../components/header/header';
import HeaderFilters from '../../components/headerFilterItems';
import BottomNavBar from '../../components/bottomNavigation';
import { HomeData } from '../../utils/json';
// import { queryRecentNews } from '../../graphql2/query';
import { useQuery } from 'graphql-hooks';
import { objToString } from '../../utils/helpers';
import SidebarNewsListBlock from './SidebarNewsListBlock';
import SpecialBlock from './SpecialBlock';


function GetStarted({navigation: {navigate}}: any) {
  const task = useAppSelector((state: any) => state?.card);
  const [state, setState] = useState(true);

  const blockComponents = {
    sidebarNewsListBlock: SidebarNewsListBlock,
    specialBlock: SpecialBlock,
  };

  const dbnc = debounce(() => onAddSuccess(), 100);
  
  useEffect(() => {
    if (task?.length > 0) {
      dbnc();
    }
  }, [dbnc, task?.length]);

  const extractBlocks = (layout) => {
    const blocks = [];

    layout.forEach((block) => {
      // Add block object
      blocks.push(block);

      if (block.section) {
        block.section.forEach((section) => {
          if (section.Blocks) {
            // Add each block inside section.Blocks
            section.Blocks.forEach((innerBlock) => {
              blocks.push(innerBlock);
            });
          }
        });
      }
    });

    return blocks;
  };

  const blocks = extractBlocks(HomeData.layout);

  return (
    <View style={{flex: 1, backgroundColor: "#fff"}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        animated
        translucent
      />
      <Header />
      <HeaderFilters />
<ScrollView> 
      {/* Ensure the length check and render */}
      {blocks.length > 0 ? (
        blocks.map((block, index) => (
          <View key={index} >
            {block.blockType === "sidebarNewsListBlock" && (
              <SidebarNewsListBlock block={block} index={index}/>
            )}
            {block.blockType === "specialBlock" && (
              <SpecialBlock block={block} index={index}/>
            )}
          </View>
        ))
      ) : (
        <Text>No blocks found.</Text>
      )}
      </ScrollView>
      <BottomNavBar />
    </View>
  );
}

export default memo(GetStarted);
