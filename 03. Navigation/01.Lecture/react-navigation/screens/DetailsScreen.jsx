import { Text, View } from "react-native";

export default function DetailsScreen({route, navigation}) {

    // navigation.setParams({}); //update parameters if needed

  return (
        <View style={{ width: 100, height: 100, backgroundColor: '#ececec', alignItems: 'center', justifyContent: 'center'}}>
           
            <Text >Details Screen</Text>
            <Text >{route.params.itemId}</Text>
            <Text >{route.params.itemName}</Text>
            <Text >{route.params.itemDesc}</Text>
            {/* <Link screen={"Details"} params={{itemId: id}}>Details</Link> */}
            
        </View>
  );

}