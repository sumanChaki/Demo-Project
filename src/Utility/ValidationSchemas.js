import * as yup from "yup";


const validationSchemas = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, "Enter atleast 2 characters")
    .max(25, "Enter maximum 25 characters")
    .required("Please enter your name"),

  email: yup
    .string()
    .trim()
    .email("Invalid email format")
    .required("Enter your email address"),

  phone_Number: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Enter your phone number"),
  subject: yup.string().trim().required("Enter your subject"),

  service: yup.string().trim().required("Please choose service")
});

export default validationSchemas;