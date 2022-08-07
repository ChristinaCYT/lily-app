import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import welcome from '../assets/welcome-page.png'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground source={welcome} style={styles.welcome} >
                <View style={styles.container2}>
                    <Text style={styles.title}>Walk With Us</Text>
                    <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                    <Text style={styles.swipe}>Swipe right to start</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    welcome: {
        width: windowWidth,
        height: windowHeight,
        paddingVertical: 10
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '700',
        lineHeight: 18,
        letterSpacing: 0.1,
    },
    desc: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '400',
        letterSpacing: 0.1,
        lineHeight: 16,
        textAlign: 'left',
    },
    swipe: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 1,
        lineHeight: 20,
    },
    container2: {
        width: '80%',
        height: '40%',
        alignItems: 'center',
        marginVertical: '60%',
        paddingTop: 20,
    }
  });
  

export default WelcomeScreen    