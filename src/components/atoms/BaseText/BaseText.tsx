
type TextProps = {
    text: string;
}

const BaseText: React.VFC<TextProps> = ({text}) => {
    return (<p>{text}</p>)
}


export default BaseText;
