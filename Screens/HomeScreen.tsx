import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Artworks from '../components/arts';
import { useArtworks } from '../hooks/useArtworks';
import { useSearch } from '../hooks/useSearch';
import styles from '../Homescreen.styles'; // Import the stylesheet

const HomeScreen: React.FC = () => {
  const { artworks, loading } = useArtworks();
  const { searchQuery, setSearchQuery, filteredArtworks } = useSearch(artworks);

  const [fontsLoaded] = useFonts({
    'CedarvilleCursive-Regular': require('../assets/fonts/CedarvilleCursive-Regular.ttf'),
  });

  if (!fontsLoaded || loading) {
    return null; // Show loading indicator if fonts are not loaded or data is still loading
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        style={styles.scrollView}
      >
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Image
              source={require('../assets/artify-logo.png')}
              style={styles.logo}
            />
            <BellIcon size={hp(4)} color="gray" />
          </View>

          <View style={styles.placeholder} />

          <Text style={styles.headerTitle} />

          <Text style={styles.subtitle}>
            A treat for art lovers!
          </Text>

          <View style={styles.searchContainer}>
            <TextInput 
              placeholder='Search any art'
              placeholderTextColor='grey'
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
            <View style={styles.searchIconContainer}>
              <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
            </View>
          </View>
        </View>

        <View>
          {filteredArtworks.length > 0 ? (
            <Artworks arts={filteredArtworks} categories={undefined} />
          ) : (
            <Text style={styles.noArtworksText}>No artworks found</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
