'use client'
import styles from './profilesection.module.css'
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
        <section className={`${styles.sectionContainer} ${!status && 'd-sm-none'} `}>
            <h2>Profil</h2>
            <div className={styles.header}>
                <h3 style={{color: 'var(--primary)'}}>Profesyonel Bakış</h3>
                <span>Düzenle</span>
            </div>
            <hr className={styles.hr}/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
            </p>
            <div className={styles.header}>
                <h3>Deneyim</h3>
                <span>Düzenle</span>
            </div>
            <hr className={styles.hr}/>
            <h3 className={styles.subTitle}>Founder</h3>
            <h4 className={styles.extras}>Neyasis Technology</h4>
            <p className={styles.features}>February 2014 - Present (6 Years , 10 Months) <br/> Ümraniye - İstanbul /
                Turkey</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <h3 className={styles.subTitle}>Software Development Manager</h3>
            <h4 className={styles.extras}>IBM</h4>
            <p className={styles.features}>Jully 2011 - January 2014 (2 Years, 6 Months) <br/> Armonk- New York /ABD</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
            </p>
            <div className={styles.header}>
                <h3>Eğitim</h3>
                <span>Düzenle</span>
            </div>
            <hr className={styles.hr}/>
            <h3 className={styles.subTitle}>Bahçeşehir Üniversitesi</h3>
            <p>Master Degree <br/> Computer & Information Scienses <br/> 2015-2019</p>
            <h3 className={styles.subTitle}>Boğaziçi Üniversitesi</h3>
            <p className={styles.features}>Bachelor’s Degree <br/> Political Science and International
                Relations <br/> 2010-2015</p>
            <div className={styles.header}>
                <h3>Sertifikalar</h3>
                <span>Düzenle</span>
            </div>
            <hr className={styles.hr}/>
            <h3 className={styles.subTitle}>MCP (Microsoft Certified Professional</h3>
            <p className={styles.features}>Microsoft <br/> January 2015</p>

            <div className={styles.header}>
                <h3>Yetenekler</h3>
                <span>Düzenle</span>
            </div>
            <hr className={styles.hr}/>

            <div className={styles.checkContainer}>
                <div className={styles.check}>
                    <img src="/media/icons/noun-list-1828555.png" alt=""/>
                    <span>C#.Net (10 years)</span>
                </div>
                <div className={styles.check}>
                    <img src="/media/icons/noun-list-1828555.png" alt=""/>
                    <span>Swift (5 years)</span>
                </div>
                <div className={styles.check}>
                    <img src="/media/icons/noun-list-1828555.png" alt=""/>
                    <span>React (3 years)</span>
                </div>
            </div>

            <div className={styles.header}>
                <h3>İlgi Alanları</h3>
                <span>Düzenle</span>
            </div>
            <hr className={styles.hr}/>

            <div className={styles.checkContainer}>
                <div className={styles.check}>
                    <img src="/media/icons/noun-list-1828555.png" alt=""/>
                    <span>Boating / Sailing</span>
                </div>
                <div className={styles.check}>
                    <img src="/media/icons/noun-list-1828555.png" alt=""/>
                    <span>Snowboarding</span>
                </div>
                <div className={styles.check}>
                    <img src="/media/icons/noun-list-1828555.png" alt=""/>
                    <span>Windsurfing</span>
                </div>
            </div>
        </section>
    )
}