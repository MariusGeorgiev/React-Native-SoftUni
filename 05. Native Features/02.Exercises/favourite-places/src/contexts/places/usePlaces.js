import { useContext } from "react";
import { PlaceContext } from "./PlaceProvider.jsx";

export function usePlace() {
    const context = useContext(PlaceContext);
    
    return context;
}
