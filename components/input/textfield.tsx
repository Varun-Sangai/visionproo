import { InputField } from "@/libs/type";
import { TextField, styled } from "@mui/material";

const CustomTextField = styled(TextField)({
  "& .MuiInputLabel-root": {
    color: "#506783 !important",
    "&.Mui-focused": {
      transform: "translate(14px,-9px) scale(0.75)",
    },
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#eeeeee !important",
    },
    "&:hover fieldset": {
      borderColor: "#859BB4 !important",
      borderWidth: "1px !important",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#859BB4 !important",
      borderWidth: "1px !important",
    },
  },
});
export default function InputField(props: InputField) {
  const { id, name, helperText, onBlur, onChange,error, value, label,readonly=false} = props;
  return (
    <>
      <CustomTextField
        fullWidth
        id={id}
        name={name}
        className="w-full"
        label={label}
        value={value}
        onChange={onChange}
        InputProps={{
          sx: {
            "& input": {
              fontSize: "16px",
              lineHeight: "150%",
              color: "#000",
              fontWeight: "500 !important",
              backgroundColor: "#fff",
              padding: "12px",
            },
          },
          readOnly: readonly,
        }}
        InputLabelProps={{
          sx: {
            fontSize: "14px",
            transform: value
              ? "translate(14px,-9px) scale(0.75)"
              : "translate(14px,12px) scale(1)",
          },
        }}
        onBlur={onBlur}
        error={error}
        helperText={helperText}
      // multiline
      />
    </>
  );
}
