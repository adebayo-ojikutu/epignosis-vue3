import { required, email, } from "@vuelidate/validators";
export const userValidations = {
  name: {
    required,
  },
  email: {
    required,
    email,
  },
  phone: {
    required,
  },
};
