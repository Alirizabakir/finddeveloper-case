import styles from './boxes.module.css'

export default function Boxes() {
    return (
        <section className={'container'}>
            <div className={styles.boxesContainer}>
                <div className={styles.box}>
                    <img src="/media/rectangle/person@2x.png" alt="person"/>
                    <div className={styles.footer}>
                        <p>İş Ara</p>
                        <p>Profilini Oluştur</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <img src="/media/rectangle/boss@2x.png" alt="person"/>
                    <div className={styles.footer}>
                        <p className={styles.borderNone}>İş Veren Çözümleri</p>
                    </div>
                </div>
            </div>
        </section>
    )
}