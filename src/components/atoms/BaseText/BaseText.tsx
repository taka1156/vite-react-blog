export interface TextProps {
    text: string;
}

export const BaseBtn: React.VFC<TextProps> = ({text}) => {
    return (<p>{text}</p>)
}
