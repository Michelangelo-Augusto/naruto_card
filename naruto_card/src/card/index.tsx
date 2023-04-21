import './index.css';
import { cardNinja } from '../models/card';
import { useState } from 'react';

const Card = () => {
    const [card, setCard] = useState<cardNinja>({
        nome: 'Naruto',
        vida: 100,
        defesa: 25,
        capacidade: 100,
        chacra: {
            "tipo": ["vento", "fogo"]
        }
    });
    return (
        <div className='conteiner-externo'>
            <div > <div className='conteiner'>
                <div>
                    <label>nome:</label>
                    <p>{card.nome}</p>
                </div>

                <div>
                    <label>vida:</label>
                    <p>{card.vida}</p>
                </div>

                <div>
                    <label>defesa:</label>
                    <p>{card.defesa}</p>
                </div>

                <div>
                    <label>capacidade:</label>
                    <p>{card.capacidade}</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <label>chacra:</label>
                    {card.chacra.tipo.map(tipo =>
                        <p style={{ marginLeft: '5px' }}>{tipo}</p>
                    )}
                </div>
            </div>

            </div>
        </div>

    )
}
export default Card;

