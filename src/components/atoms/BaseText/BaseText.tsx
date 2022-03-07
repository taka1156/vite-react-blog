export interface TextProps {
    text: string;
}

export const BaseText: React.VFC<TextProps> = ({text}) => {
    return (<p className="text-xl">{text}</p>)
}
