import styles from './footer.module.css'
import {usePathname} from "next/navigation";

export default function Footer() {
    const pathName = usePathname()

    return (
        <footer className={styles.footer}>
            <div className={`${styles.content} container`}>
                <div className={styles.right}>
                    <div className={styles.rightHeader}>
                        <span>®2020 Finddeveloper.net</span>
                        <ul>
                            <li>Gizlilik Merkezi</li>
                            <li>Çerezler</li>
                            <li>Gizlilik</li>
                            <li>Şartlar</li>
                        </ul>
                    </div>
                    <div style={{display: pathName !== '/' && 'none'}} className={styles.rightFooter}>
                        <img src="/media/rectangle/iskur-logo.png" alt="iskur-logo"/>
                        <div>
                            <p>
                                Finddeveloper.net A.Ş. Özel İstihdam Bürosu Olarak 31/08/2018-30/08/2021 tarihleri
                                arasında faaliyette bulunmak üzere, Türkiye İş Kurumu tarafından 16.07.2018 tarih ve
                                26124 sayılı karar uyarınca 170 nolu belge ile faaliyet göstermektedir. 4904 sayılı
                                kanun uyarınca iş arayanlardan ücret alınmayacak ve menfaat temin edilmeyecektir.
                                Şikayetleriniz için aşağıdaki telefon numaralarına başvurabilirsiniz. Diğer iller için
                                tıklayın. Türkiye İş Kurumu İstanbul İl Müdürlüğü: 0212 555 55 55 Türkiye iş Kurumu
                                İstanbul Çalışma ve İş Kurumu Ümraniye
                                <br/>
                                Hizmet Merkezi :
                                <br/>
                                0216 523 90 26
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.left}>
                    <div className={styles.leftHeader}>
                        <ul>
                            <li>Finddeveloper'da Çalışmak</li>
                            <li>Hakkımızda</li>
                            <li>Yardım Merkezi</li>
                        </ul>
                        <div className={styles.langs}>
                            <span>Türkçe</span>
                            <img src="/media/icons/arrow-down.png" alt="down"/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}