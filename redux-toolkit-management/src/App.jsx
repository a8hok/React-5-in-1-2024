import { useSelector } from "react-redux";
import "./App.css";
import AddProduct from "./components/AddProduct";

function App() {
  const items = useSelector((state) => {
    return state.cart.products;
  });
  return (
    <>
      {items.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
      <AddProduct />
    </>
  );
}

export default App;
