import {TituloStyle, SubTitulo} from "./Titulo.style";

interface TituloProps{
    titulo: string;
    subtitulo?: string | JSX.Element;
}
export default function Titulo(props: TituloProps){
    return (
        <>
            <TituloStyle> {props.titulo}</TituloStyle>
            <SubTitulo>{props.subtitulo}</SubTitulo>
        </>
    )
}