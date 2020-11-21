import { useEffect, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import styles from './Pokemon.module.scss';

export default function Pokemon({ data }) {
    const [ pokemon, setPokemon ] = useState();
    const history = useHistory();
    useEffect(() => {
        let mounted = true;
        setPokemon();
        (async () => {
            const pokemans = await fetch(data.url)
                .then(res => res.json());
            if (mounted) {
                setPokemon(pokemans);
            }
        })();

        return () => {
            mounted = false;
        }
    }, [ data ]);

    return (
        <li className={styles.container}>
            {pokemon ? (
                <>
                    <img
                        className={styles.image}
                        src={Object.values(pokemon.sprites)[0]}
                        alt={`${pokemon.name} sprite`}
                    />
                    <h2 className={styles.heading}>{pokemon.name}</h2>
                    <Button
                        icons={{
                            right: FaExternalLinkAlt
                        }}
                        onClick={() => {
                            history.push(`/pokemon/${pokemon.id}`);
                        }}
                    >
                        Learn more
                    </Button>
                </>
            ) : <p>Loading...</p>}
        </li>
    );
}
