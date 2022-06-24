import {Button} from "@mui/material";

import {
    ListaStyled,
    ItemLista,
    Foto,
    Informacaoes,
    Nome,
    Descricao,
} from './Lista.style'
import { Pet } from '../../../data/@types/Pet'
import {TextSerice} from '../../../data/services/TextService'
interface ListaProps {

    pets: Pet[];
    onSelect: (pet: Pet) => void;
}


export default function Lista(props: ListaProps) {

    const tamanhoMaximoTexto = 200;

            return (
                <ListaStyled>
                    {props.pets.map(pet=>(
                    <ItemLista key={pet.id} >
                        <Foto src={pet.foto} alt={pet.nome} />
                        <Informacaoes>
                            <Nome>{pet.nome}</Nome>
                            <Descricao> { TextSerice.limitarTexto( pet.historia, tamanhoMaximoTexto)}</Descricao>
                                <Button variant={'contained'} fullWidth onClick={() => props.onSelect(pet) }>
                                    Adotar {pet.nome}</Button>
                        </Informacaoes>
                    </ItemLista>
                     ))}
                </ListaStyled>
            )
}