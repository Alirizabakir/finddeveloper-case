import styles from "./searchbar.module.css";

export default function Searchbar() {
    return (
        <div className={styles.searchContainer}>
            <div className={styles.searchContent}>
                <label htmlFor="search">
                    <img src="/media/icons/search-default.svg" alt=""/>
                    <input id={'search'} type="text" placeholder={'İş Ara | İş, Şirket, Anahtar Kelime'}
                           autoComplete={'off'}/>
                </label>
                <button>
                    <figure>
                        <img src="/media/rectangle/group-6.png" alt=""/>
                    </figure>
                </button>
            </div>
            <div className={styles.other}><span>Detaylı Arama</span></div>
        </div>
    )
}