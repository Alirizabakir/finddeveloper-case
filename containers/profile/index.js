'use client'
import styles from './profile.module.css'
import ProfileASide from "@/components/profileaside";
import ProfileSection from "@/components/profilesection";
import Background from "@/components/background";
import ProfileSearchbar from "@/components/profilesearchbar";
import {useState} from "react";

export default function ProfileContainer() {
    const [Status, setStatus] = useState(false)
    const [Title, setTitle] = useState('Detaylar')

    return (
        <section className={styles.profileContainer}>
            <div style={{backgroundColor: '#f5f7ff'}}>
                <div className="container">
                    <ProfileSearchbar/>
                </div>
            </div>
            <div className={'position-relative'}>
                <button onClick={() => {setStatus(!Status)}} className={Status ? styles.status : styles.statusActive}>{Title}</button>
                <div className={`container ${styles.content}`}>
                    <ProfileASide status={Status}/>
                    <ProfileSection status={Status}/>
                </div>
                <Background/>
            </div>
        </section>
    )
}