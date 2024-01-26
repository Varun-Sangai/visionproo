export interface TeamCardProps{
    name: string;
    designaton:string;
    description:string;
    socials:SocialProps[];
}
export interface SocialProps{
    socialicon:any;
    sociallink:string;
}



export interface InputField {
    id: string;
    name: string;
    label: string;
    helperText?: React.ReactNode;
    error?: boolean | undefined;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    value?: unknown;
    readonly?: boolean;
}