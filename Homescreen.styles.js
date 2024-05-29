import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE9FE',
  },
  scrollView: {
    marginBottom: 6,
    paddingTop: 14,
  },
  scrollViewContent: {
    paddingBottom: 50,
  },
  header: {
    backgroundColor: '#065F46',
  },
  headerTop: {
    marginHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  logo: {
    height: hp(5),
    width: hp(5.5),
    marginTop: 6,
  },
  placeholder: {
    paddingLeft: 15,
  },
  headerTitle: {
    fontSize: hp(3.8),
    fontWeight: '600',
    color: '#F1F5F9',
  },
  subtitle: {
    fontSize: hp(3.8),
    color: '#F1F5F9',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  searchContainer: {
    marginTop: 4,
    marginHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 9999,
    backgroundColor: 'white',
    padding: 6,
  },
  searchInput: {
    fontSize: hp(1.7),
    flex: 1,
    marginBottom: 1,
    paddingBottom: 3,
    paddingLeft: 3,
    letterSpacing: 1,
  },
  searchIconContainer: {
    backgroundColor: 'white',
    borderRadius: 9999,
    padding: 3,
  },
  noArtworksText: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: hp(2),
    color: 'gray',
  },
  flatListContent: {
    paddingHorizontal: 4,
    paddingBottom: 50,
  },
  artworkItem: {
    marginBottom: hp(2),
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  artworkImage: {
    width: '100%',
    height: hp(25),
  },
  artworkTitle: {
    marginTop: hp(1),
    fontSize: hp(2),
    fontWeight: 'bold',
    textAlign: 'center',
    padding: hp(1),
  },
});
