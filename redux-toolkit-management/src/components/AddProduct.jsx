import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addProduct } from "../Slice/cartSlice";

export default function AddProduct() {
    const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      price: 0,
      quantity: 0,
    },
    onSubmit: (values) => {
      dispatch(addProduct(values));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          name="quantity"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.quantity}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
