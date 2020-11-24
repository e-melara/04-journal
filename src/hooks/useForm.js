import { useState } from "react";

export default function useForm(initialState) {
 const [values, setValues] = useState(initialState);
 const reset = (newInitialState = initialState) => {
  setValues(newInitialState);
 };

 const handleChangeInput = ({ target }) => {
  setValues({
   ...values,
   [target.name]: target.value,
  });
 };

 return [values, handleChangeInput, reset];
}
