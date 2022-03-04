
interface HeadingProps {
    hLv: 1|2|3|4|5|6;
    text: string;
}

const BaseText: React.VFC<HeadingProps> = ({hLv, text}) => {
    const HeadingTag = `h${hLv}` as React.ElementType; 
    return (<HeadingTag>{text}</HeadingTag>)
}


export default BaseText;
