import { useContext } from "react";
import { UserAPIContext } from "./UserContext";

export function UseAPIData() {
  const userData = useContext(UserAPIContext);
  return userData;
}
