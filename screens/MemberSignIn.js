//loading page.js = import statements, jsx elements, and exporting it
import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TouchableOpacity, View, TouchableHighlight, Image, TextInput, ScrollView} from "react-native";
// import {styles} from "../CSS/styles"

const MemberSignIn = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePress = () => {
        console.log(`Email:`, email);
        console.log(`Password:`, password);
        
        // handling form submissions
        // first handling first name (should be greater than 1 characters)
        if (email.includes('@') && password.length>7) {
            // !isNaN(parseInt(str)) -> returns true if phone number consists entirely of numbers
            navigation.navigate('Home');
        }else if (!email.includes('@')) {
            navigation.navigate('TryAgainCreatingAcc', { err: "Please ensure you enter a valid email address!" , msg: "You are not logged in."});
        }else if (password.length<=7) {
            navigation.navigate('TryAgainCreatingAcc', { err: "Password entered was incorrect" ,msg: "You are not logged in."});
        }else {
            navigation.navigate('TryAgainCreatingAcc', { err: "An error occured during the sign in process, please try again!", msg: "You are not logged in."});
        };

    };
    
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>

                {/* welcome sign image */}
                <Image
                    source={{ uri: "https://i.gyazo.com/415495daadaf485604315667fec8fad1.png" }}
                    style={styles.logo}
                />
                
                {/* text below welcom sign */}
                <View style={styles.topContent}>        
                    <Text style={styles.heading}>We're glad you're back...</Text>
                </View>

                {/* Form inputs */}
                <View style={styles.formContainer}>
                    
                    <TextInput
                        style={styles.input}
                        placeholder="Email ID"
                        onChangeText={setEmail}
                        value={email}
                        fontSize={16}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        onChangeText={setPassword}
                        value={password}
                        fontSize={16}
                    />
                    
                    

                    <TouchableHighlight
                        style={[styles.btn, { backgroundColor: '#95BB6E' }]}
                        activeOpacity={0.7}
                        onPress={handlePress}
                    >
                        <Text style={styles.textBtn}>Sign In</Text>
                    </TouchableHighlight>


                    <TouchableHighlight
                        style={styles.smallBtn}
                        activeOpacity={0.7}
                        onPress={() => [navigation.navigate("MemberCreateAccount")]}
                    >   
                        <View style={styles.signInContainer}>
                            <Text style={styles.smallTxt}>or </Text>
                            <Text style={styles.signInText}>Create A New Account</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.coachBtn}
                        activeOpacity={0.7}
                        onPress={() => [navigation.navigate("CoachSignIn")]}
                    >   
                        <View style={styles.signInContainer}>
                            <Text style={styles.smallTxt}>Are you a Coach? </Text>
                            <Text style={styles.signInText}>Coach Sign In</Text>
                        </View>
                    </TouchableHighlight>

                </View>
            </View>
        </ScrollView>

    );

};


// STYLES SHEET
const styles= StyleSheet.create({
    signInText: {
        color: 'gray',
        textDecorationLine: 'underline',
        fontSize: 15,
    },
    signInContainer: {
        flexDirection: 'row', // To align children horizontally
    },
    smallBtn: {
        paddingVertical: 5,
        top: 30,
    },
    smallTxt: {
        color: 'gray',
        fontSize: 15,
    },
    scrollViewContent: {
        flexGrow: 1,
        minHeight:'130%',
    },
    coachBtn: {
        paddingVertical: 5,
        top: 30,
    },
    container: {
        flex: 1,
        backgroundColor: '#E8F8D8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topContent: {
        alignItems: 'center',
        marginBottom: 10,
    },
    heading: {
        fontSize: 19,
        marginBottom: 5,
        fontWeight: 'bold',
        bottom:175,
    },
    formContainer: {
        alignItems: 'center',
        bottom:155,
    },

    input: {
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 20,
        marginBottom: 13,
        borderRadius: 30,  
        width: 270,
    },


    btn: {
        // bottom:30,
        top: 30,
        borderRadius: 50,
        paddingVertical: 3,
        paddingHorizontal: 5,
        marginHorizontal: 1,
        marginBottom: 10,
        marginTop: 1,
        minWidth: 175,
        margin: 30,
        alignItems: 'center',
        alignSelf: "center",
        backgroundColor: "#CAE19D",
        width: "20%",
    },
    
    textBtn: {
        fontSize: 19,
        textAlign: 'center',
        paddingVertical: 10,
    },
    
    
    // the button   
    containerBtn: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },

    logo: {
        width: 210,
        height: 140,
        right: 8,
        bottom: 180,
      },

});

export default MemberSignIn;