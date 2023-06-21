import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "#282d34",
    paddingHorizontal: 10,

  },

  header: {
    
    width: "100%",
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,

  },

  iconsContainer: {
    flexDirection: 'row',
    width: 95,

  },

  iconsStyle: {
    margin: 10,
  },

  title: {
    width: 70,
    height: 50,
    marginTop: 1,
    paddingTop: 1,
  },

  amazonLogoImg: {
    marginTop: -32,
    marginLeft: 30,
    maxWidth: 80,
    aspectRatio: 16 / 9,
    maxHeight: 50
    

  },

  amazonTitleImg: {
    width: 50
  },

  category: {

    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    marginBottom: 15,

  },

  categoryBorder: {
    height: 30,
    width: 70,


  },

  selectedCategory: {
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    color: 'black',
    height: 30,
    width: 70,
    textAlign: 'center',


  },

  selectedCategoryText: {
    color: 'black',
  },

  categoryText: {
    paddingTop: 5,
    height: 30,
    width: 70,
    fontSize: 16,
    fontWeight:'bold',
    color: "#FFFFFF",
    textAlign: 'center',

  },

  movieThumbnailImg: {
    width: "100%",
    alignItems: "center",
    height: 300,


  },


  movieText: {
    color: "#ffffff",
    fontSize: 19,
    fontWeight: "900",
    padding: 15,
    maxWidth: 320,
  },

  movieImage: {
    Width: 50,
    height: 50
  },

  movieTextTitle: {
    color: '#025cef',

  },

  contentList: {
    paddingLeft: 18,
    paddingRight: 30

  },

  contentMovies: {

  }
});