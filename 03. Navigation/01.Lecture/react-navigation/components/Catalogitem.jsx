import { Link } from "@react-navigation/native";
import { Text, View } from "react-native";

export default function CatalogItem({
    id,
    name,
    description
}) {


  return (
        <View style={{ width: 100, height: 100, backgroundColor: '#ececec', alignItems: 'center', justifyContent: 'center'}}>
           
            <Text >{name}</Text>
            <Link screen="Details" params={{itemId: id, itemName: name, itemDesc: description}}>Details</Link>
            
        </View>
  );

}