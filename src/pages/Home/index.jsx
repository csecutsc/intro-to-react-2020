import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import Pokemon from '../../components/Pokemon';
import styles from './Home.module.scss';

export default function Home() {
    const [items, setItems] = useState();
    useEffect(() => {
        let mounted = true;
        (async () => {
            const pokemans = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)
                .then(res => res.json());
            if (mounted) {
                setItems(pokemans.results);
            }
        })();
        return () => {
            mounted = false;
        }
    }, []);

    return (
        <Layout>
            <Section>
                <h1 className={styles.heading}>Pokemons</h1>
                <ul className={styles.list}>
                    {items
                        ? items.map(pokemon => (
                            <Pokemon
                                key={pokemon.url}
                                data={pokemon}
                            />
                        ))
                        : (
                            <li className={styles.loader}>Loading...</li>
                        )}
                </ul>
            </Section>
        </Layout>
    )
}