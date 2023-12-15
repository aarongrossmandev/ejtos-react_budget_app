import {useContext} from "react";
import {AppContext} from "../context/AppContext";

export const CurrencySymbol = () => {
  const {currency} = useContext(AppContext);
  if(currency === "£") return <span>£</span>;
  else if(currency === "$") return <span>$</span>;
  else if(currency === "€") return <span>€</span>;
  else if(currency === "₹") return <span>₹</span>;
};