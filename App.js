// IMPORTING things we need!
// View, Text, Image, and StyleSheet are core building blocks for React Native apps.
// SafeAreaView is used to ensure the app positions content appropriately around notches and other OS interface elements.
import { View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import { useEffect } from 'react';

import runExercises from './Exercises';

// EXPORTING something we build!
// Remember, UI Components are functions under the hood and they return JSX (UI). This App component returns a "SafeAreaView" with more components nested underneath.
export default function App() {
  // START - don't modify the below code
  useEffect(() => {
    runExercises();
  }, []);
  // END - don't modify the above code

  // Feel free to edit anything starting here! --------------------------------------------

  const welcomeMessage = "Need some motivation????"

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{welcomeMessage}</Text>
      <Text style={styles.paragraph}>
        Generate a random motivational quote and relaxing image.
      </Text>
      <View style={styles.imageContainer}>
        <Image style={styles.logo} source={require('./assets/snack-icon.png')} />
        <Image style={styles.logo} source={require('./assets/snack-icon.png')} />
        <Image style={styles.logo} source={require('./assets/snack-icon.png')} />
      </View>
    </SafeAreaView>
  );
}

// STYLING for our app!
// Here, we define all the styling that we use in our app. The format is always "const styles = StyleSheet.create({...})". The "styles" object contains style objects. We can access a style X with "styles.X". We will learn more about styles and the "StyleSheet" component next Tuesday:-)
const styles = StyleSheet.create({
  container: {
    flex: 1, // We'll learn about "flex" and other flexbox properties in class!
    flexDirection: 'column', // Try: 'row' or 'column'
    alignItems: 'center', // Try: 'flex-start' or 'center' or 'flex-end' 
    justifyContent: 'center', // Try: 'flex-start' or 'flex-end' or 'space-between' or 'space-around' or 'space evenly'
    backgroundColor: '#f8cac0', // Try different color hex codes!
    padding: 8, // Try changing this value!
  },
  imageContainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 24, // Try changing this value!
    fontWeight: 'bold', // Try: 'light' or 'normal' or 'bold'
    textAlign: 'center'
  },
  paragraph: {
    // Try changing these values!
    margin: 24,
    fontSize: 18,
    textAlign: 'center'
  },
  logo: {
    // Try changing these values!
    height: 64,
    width: 64,
    margin: 8,
  }
});
