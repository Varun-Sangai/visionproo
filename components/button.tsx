import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from "react";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> , PropsWithChildren{
}

export default function CustomButton(props:ButtonProps){
    const {children,...rest}=props;
    return(
    <button {...rest}>
        {children}
    </button>
    );
}