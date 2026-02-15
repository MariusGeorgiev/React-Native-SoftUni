import NetInfo from "@react-native-community/netinfo";
import { useState, useEffect } from "react";

export function useNetInfo() {
    const [netInfo, setNetInfo] = useState(null);

    useEffect(() => {
        NetInfo.fetch()
            .then(state => {
                console.log('Connection type', state.type);
                console.log('Is connected?', state.isConnected);
                setNetInfo(state);
            });

        const unsubscribe = NetInfo.addEventListener(state => {
            console.log('Connection type', state.type);
            console.log('Is connected?', state.isConnected);
            setNetInfo(state);        });

        return () => {
            unsubscribe();
        }
    }, [NetInfo]);

    return {
        isOffline: netInfo ? !netInfo.isConnected : false,
    }
}
