'use client'
import styles from './jobpostingforyou.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Action_Start} from "@/store/action";

export default function JopPostingForYou() {

    const dispatch = useDispatch();
    const JobPostingsForYou = useSelector((state) => state.JobPostingsForYou);

    useEffect(() => {
        dispatch(Action_Start('get', '/posts', 'JobPostingsForYou'));
    }, []);

    return (
        <section className={`${styles.section} container`}>
            <h2>Sizin için iş ilanları</h2>
            <div className={styles.container}>
                <div className={styles.listContainer}>
                    <h3>Popüler Kategoriler</h3>
                    <ul>
                        {
                            JobPostingsForYou.popularCategories && JobPostingsForYou.popularCategories.map(item => (
                                <li key={`${item.title}`}>{item.title}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className={styles.listContainer}>
                    <h3>Popüler Başlıklar</h3>
                    <ul>
                        {
                            JobPostingsForYou.popularTitles && JobPostingsForYou.popularTitles.map(item => (
                                <li key={`${item.title}`}>{item.title}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className={styles.listContainer}>
                    <h3>Popüler Lokasyonlar</h3>
                    <ul>
                        {
                            JobPostingsForYou.popularLocations && JobPostingsForYou.popularLocations.map(item => (
                                <li key={`${item.title}`}>{item.title}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className={styles.listContainer}>
                    <h3>Popüler Şirket İlanları</h3>
                    <ul>
                        {
                            JobPostingsForYou.popularCompanyPostings && JobPostingsForYou.popularCompanyPostings.map(item => (
                                <li key={`${item.title}`}>{item.title}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}