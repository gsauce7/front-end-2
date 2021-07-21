import { useLocalStorage } from "./useLocalStorage";

export const useForm = (initialValues) => {
  const [values, setValues] = useLocalStorage('formValues', initialValues);

  const handleChanges = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const clearForm = e => {
    e.preventDefault();
    setValues(initialValues);
  };

  return [values, handleChanges, clearForm];
}