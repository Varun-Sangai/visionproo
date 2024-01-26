"use client"
import { validationSchemaContactUsForm } from "@/libs/formvalidationschema";
import { useFormik } from "formik";
import InputField from "../input/textfield";
import { LoadingButton } from "@mui/lab";

export default function ContactUsForm(){
    const formik = useFormik({
        initialValues: {
            organizationName: "",
            fullName: "",
            phoneNumber:"",
            email:"",
        },
        validationSchema: validationSchemaContactUsForm,
        onSubmit: (values) => {
         
        },
      });
    return(
        <form className="flex flex-col gap-4 w-full" onSubmit={formik.handleSubmit}>
             <InputField
              id="fullname"
              name="fullname"
              label="Full Name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.fullName && Boolean(formik.errors.fullName)
              }
              helperText={formik.touched.fullName && formik.errors.fullName}
            ></InputField>
            <InputField
              id="organizationName"
              name="organizationName"
              label="Organization Name"
              value={formik.values.organizationName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.organizationName && Boolean(formik.errors.organizationName)}
              helperText={formik.touched.organizationName && formik.errors.organizationName}
            ></InputField>
             <InputField
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            ></InputField>
            <InputField
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            ></InputField>
            <LoadingButton className="!text-[16px] !font-normal !leading-[150%] !text-[#fff] !px-4 !py-3 !bg-[#46295f] rounded-[8px]">
              Submit
            </LoadingButton>
        </form>
    )
}