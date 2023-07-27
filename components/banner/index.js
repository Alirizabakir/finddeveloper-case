import styles from './banner.module.css'
import Searchbar from "@/components/searchbar";

export default function Banner() {
    return (
        <div className={styles.bannerContainer}>
            <div className={`${styles.content} container`}>
                <figure>
                    <img src="/media/rectangle/logo.png" alt=""/>
                </figure>

                <figure className={styles.header}>
                    <img src="/media/rectangle/header-text.png" alt=""/>
                </figure>

                <Searchbar/>
            </div>
        </div>
    )
}