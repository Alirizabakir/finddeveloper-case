'use client'
import styles from './partners.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Action_Start} from "@/store/action";

export default function Partners() {
    const dispatch = useDispatch();
    const PartnersData = useSelector((state) => state.Partners);

    useEffect(() => {
        dispatch(Action_Start('get', '/posts', 'Partners'));
    }, []);

    return (
        <section className={'container'}>
            <div className={styles.partnersContainer}>
                <ul>
                    {
                        PartnersData.length > 0 && PartnersData.map(item => (
                            <li key={`${item.slug}-${item.id}`}>
                                <img src={`/media/partners/${item.slug}.png`} alt=""/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}