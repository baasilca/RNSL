import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, View, Text, ScrollView } from 'react-native';
import { SidebarNewsListBlockType } from '../../../types/page';
import { fetchNews } from '../../../services/newsService';
import ImageComponent from '../../../components/Image';
import { s } from '../../../utils/scale';

export default function SidebarNewsListBlock({ block, index }: { block: SidebarNewsListBlockType, index: Number }) {
  const [data, setData] = useState([])
  const fetch = async () => {
    const articles = await fetchNews({
      categoryId: block?.category,
      limit: block?.limit,
      sort: block?.orderBy === "oldest" ? "publishedAt" : "-publishedAt",
    });

    console.log("-=-========-----------====", articles);
    setData(articles)
  }
  useEffect(() => {
    fetch()
  }, [])
  if (!data || !data.length) { return null }

  return (
    <View style={styles.container}>
      <View style={styles.mainArticleContainer}>
        {data.length > 0 && (
          <View style={styles.mainArticle}>
            <ImageComponent
              source={{ uri: data[0].image.url }}
              style={styles.mainArticleImage}
              resizeMode="cover"
            />
            <View style={styles.mainOverlay}>
              <View style={{ flex: 1 }} />
              <View style={styles.mainOverlayText}>
                <Text style={styles.mainArticleNumber}>01</Text>
              </View>
              <Text style={styles.mainArticleTitle}>{data[0].title}</Text>
            </View>
          </View>
        )}
      </View>

      <View style={styles.otherArticlesContainer}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {data.slice(1).map((article, index) => (
            <View
              key={article.id}
              style={{
                width: '48%',
                marginBottom: s(15),
                borderRadius: s(10),
              }}>

              {/* Image Section */}
              <View style={{ position: 'relative', borderRadius: s(10) }}>
                <ImageComponent
                  source={{ uri: article.image.url }}
                  style={{
                    width: '100%',
                    height: s(120),
                    borderRadius: s(10),
                  }}
                  resizeMode="cover"
                />
                <View style={{
                  position: 'absolute',
                  top: s(-10),
                  left: s(10),
                  backgroundColor: '#FFE600',
                  borderRadius: s(10),
                  width: s(60)
                }}>
                  <Text style={{ fontSize: s(35), fontWeight: '400', color: '#333', alignSelf: 'center' }}>
                    {index + 2 < 10 ? `0${index + 2}` : index + 2}
                  </Text>
                </View>
              </View>

              <View style={{ paddingTop: s(10) }}>
                <Text style={{ color: '#000', fontSize: s(12), fontWeight: 'bold', marginBottom: 5 }} numberOfLines={4}>
                  {article.title}
                </Text>
              </View>

            </View>
          ))}
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: s(10),
  },
  mainArticleContainer: {
    marginBottom: s(20),
  },
  mainArticle: {
    // position: 'relative',
  },
  mainArticleImage: {
    width: '100%',
    height: s(200),
    borderRadius: s(10),
  },
  mainOverlay: {
    position: 'absolute',
    height: s(200),
    width: s(370),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: s(10),
    borderRadius: s(5),

  },
  mainArticleNumber: {
    color: '#000',
    fontSize: s(35),
    fontWeight: '400',
    alignSelf: "center"
  },
  mainArticleTitle: {
    color: '#fff',
    fontSize: s(18),
    marginTop: s(5),
    fontWeight: '600'
  },
  mainOverlayText: {
    backgroundColor: "#FFE600",
    maxWidth: s(60),
    borderRadius: 10
  },
  otherArticlesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  article: {
    width: '48%',
    marginBottom: s(15),
    position: 'relative',
  },
  articleImage: {
    width: '100%',
    height: s(120),
    borderRadius: s(10),
  },
  overlay: {
    position: 'absolute',
    top: s(10),
    left: s(10),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: s(5),
    borderRadius: s(5),
  },
  articleNumber: {
    color: '#FFC107',
    fontSize: s(20),
    fontWeight: 'bold',
  },
  articleTitle: {
    color: '#fff',
    fontSize: s(14),
    marginTop: s(5),
  },
});
