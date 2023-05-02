
import { useEffect, useState } from "react";
import { PurchaseContainer } from "./styled"

export default function PurchaseSection(props) {
    const {total, cart} = props;
    const [productTotal, setTotal] = useState(0)

    useEffect(()=>{
        let sum = 0;
        cart.forEach(p => {
            sum += p.quantity
        });
        setTotal(sum);
    },[])

    return(
        <PurchaseContainer>
        <div>
            <h3> QUANTIDADE DE PRODUTOS </h3>
            <h4> {productTotal}</h4>
        </div>

        <div>
            <h3> STATUS </h3>
            <h4> Concluído</h4>
        </div>

        <div>
            <h3> DATA </h3>
            <h4> xx/xx/xxxx</h4>
        </div>

        <div>
            <h3> VALOR TOTAL </h3>
            <h4> R$ {total} </h4>
        </div>

    </PurchaseContainer>


    )
}