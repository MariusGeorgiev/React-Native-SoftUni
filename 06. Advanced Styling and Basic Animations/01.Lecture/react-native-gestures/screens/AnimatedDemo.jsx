import { useRef } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Animated, Text, View, StyleSheet, Button } from 'react-native';


export default function AnimatedDemo() {
    const opacityRef = useRef(new Animated.Value(0));
    const opacity = opacityRef.current;
    
    const fadeIn = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Animated.View
                    style={[
                        styles.fadingContainer,
                        {
                            opacity: opacity,
                        },
                    ]}>
                    <Text style={styles.fadingText}>Fading View!</Text>
                </Animated.View>
                <View style={styles.buttonRow}>
                    <Button title="Fade In View" onPress={fadeIn} />
                    <Button title="Fade Out View" onPress={fadeOut} />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fadingContainer: {
        padding: 20,
        backgroundColor: 'powderblue',
    },
    fadingText: {
        fontSize: 28,
    },
    buttonRow: {
        flexBasis: 100,
        justifyContent: 'space-evenly',
        marginVertical: 16,
    },
});
