import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import onboarding2 from '../assets/onboarding2.png'

const windowWidth = Dimensions.get('window').width;

function OnboardScreen2() {
    return (
        <View style={styles.container}>
            <Image source={onboarding2} style={styles.onboarding2} />
            <Text style={styles.title}>Plan and Save.</Text>
            <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
            <View style={styles.container2}>
                <View style={styles.round} /><View style={styles.rectangle} /><View style={styles.round} />
            </View>
            <View style={styles.textborder}>
                <Text style={styles.button}>Next</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    onboarding1: {
        width: windowWidth,
        marginBottom: 30,
        marginTop: 70
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        marginBottom: 25,
        lineHeight: 30,
        letterSpacing: 1
    },
    desc: {
        fontSize: 19,
        fontWeight: '300',
        textAlign: 'center',
        paddingHorizontal: 30,
        letterSpacing: 0.1,
        lineHeight: 20
    },
    container2: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 40,
        marginBottom: 150
    },
    rectangle: {
        backgroundColor: '#6F9452',
        width: 29,
        height: 8,
        borderRadius: 3,
        marginRight: 9
    },
    round: {
        backgroundColor: 'rgba(111, 148, 82, 0.5)',
        width: 8,
        height: 8,
        borderRadius: 3,
        marginRight: 9
    },
    textborder: {
        justifyContent: 'center',
        backgroundColor: '#6F9452',
        width: 226,
        height: 43,
        borderRadius: 20
    },
    button: {
        textAlign: 'center',
        display: 'flex',
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 16,
        letterSpacing: 2
    }
  });
  

export default OnboardScreen2;    