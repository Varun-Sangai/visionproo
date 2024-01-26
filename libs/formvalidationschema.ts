import * as Yup from "yup";

export const validationSchemaContactUsForm = Yup.object({
  organizationName: Yup.string().required("Organization Name is Required"),
  fullName: Yup.string().required("Full Name is Required"),
  phoneNumber: Yup.string().matches(
    /^\d{10}$/,
    "Phone number must be exactly 10 digits"
  ),
  email: Yup.string().email("Enter a valid email").required("Email is Required"),
});
