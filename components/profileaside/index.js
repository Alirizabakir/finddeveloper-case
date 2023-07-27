'use client'
import styles from './profileaside.module.css'
import {useState} from "react";

export default function ProfileASide({status}) {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <aside className={`${styles.asideContainer} ${status && 'd-sm-none'}`}>
            <label htmlFor="pp">
                <span></span>
                <input id={'pp'} style={{display: 'none'}} type="file" onChange={handleImageChange}/>
                {
                    selectedImage ?
                        <img className={styles.pp} src={selectedImage} alt="Selected"/>
                        :
                        <img src={'/media/rectangle/group-3.png'} alt="Selected"/>
                }
                <div className={styles.editContainer}>
                    <div className={'position-relative'}>
                        <img src="/media/rectangle/group-39.png" alt="39"/>
                        <span className={styles.editIcon}>
                            <img src="/media/icons/icon-filled-edit.png" alt="edit"/>
                        </span>
                    </div>
                </div>
            </label>
            <div className={styles.me}>
                <h3>Nesil AKSOY</h3>
                <p>UX Desinger <br/> Türkiye, İstanbul, Sarıyer <br/> eray_karakullukcu.neyasis.com <br/> +90 555 66 44
                </p>
                <div><img src="/media/icons/shape.png" alt="shape"/> <span>Find CV’mi İndir</span></div>
                <a className={styles.link}>Profili düzenle</a>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.social}>
                <h4 className={styles.header}>Web Sitesi</h4>
                <ul>
                    <li><img src="/media/icons/5296501-linkedin-network-linkedin-logo-icon.png" alt="linkedin"/></li>
                    <li><img src="/media/icons/path.png" alt="linkedin"/></li>
                    <li><img src="/media/icons/shapee.png" alt="linkedin"/></li>
                    <li><img src="/media/icons/1775162-chat-behance-icon.png" alt="linkedin"/></li>
                    <li><img src="/media/icons/4745719-dribbble-web-design-network-connection-icon.png" alt="linkedin"/>
                    </li>
                    <li><img src="/media/icons/5365678-fb-facebook-facebook-logo-icon.png" alt="linkedin"/></li>
                    <li><img src="/media/icons/5296516-tweet-twitter-twitter-logo-icon.png" alt="linkedin"/></li>
                    <li><img src="/media/icons/noun-web-1038228.png" alt="linkedin"/></li>
                </ul>
                <a className={styles.link}>Düzenle</a>
            </div>
            <hr className={styles.hr}/>
            <div>
                <h4 className={styles.header}>Dökümanlar</h4>
                <div className={styles.field}><span><img src="/media/icons/icon-filled-file.png"
                                                         alt=""/> eraycv.docx</span> <img
                    src="/media/icons/icon-filled-cross-copy-2.png" alt=""/></div>
                <div className={styles.field}><span><img src="/media/icons/icon-filled-file-pdf.png" alt=""/> eraycv--eng.pdf</span>
                    <img src="/media/icons/icon-filled-cross-copy-2.png" alt=""/></div>
                <div className={styles.field}><span><img src="/media/icons/icon-filled-file-pdf.png" alt=""/> mcpd--cert.pdf</span>
                    <img src="/media/icons/icon-filled-cross-copy-2.png" alt=""/></div>
                <a className={styles.link}>Başka bir döküman ekle</a>
            </div>
            <hr className={styles.hr}/>
            <div>
                <h4 className={styles.header}>Kaydedilen Aramalarım</h4>
                <div className={styles.field}><span><img src="/media/icons/noun-job-3701612.png" alt=""/> Neyasis Tech.</span>
                    <img src="/media/icons/icon-filled-cross-copy-2.png" alt=""/></div>
                <div className={styles.field}><span><img src="/media/icons/noun-job-3701612.png" alt=""/> Apple</span>
                    <img src="/media/icons/icon-filled-cross-copy-2.png" alt=""/></div>
            </div>
            <hr className={styles.hr}/>
            <div>
                <h4 className={styles.header}>Başvurularım</h4>
                <div className={styles.field}><span><img src="/media/icons/noun-document-and-paper-2063766.png" alt=""/> Neyasis Tech.</span>
                    <img src="/media/icons/icon-filled-cross-copy-2.png" alt=""/></div>
                <a className={styles.link}>Tümünü Gör</a>
            </div>
        </aside>
    )
}