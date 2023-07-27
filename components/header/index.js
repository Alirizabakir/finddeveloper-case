'use client'
import styles from './header.module.css'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Action_Start} from "@/store/action";
import {usePathname, useRouter} from "next/navigation";

export default function Footer() {
    const router = useRouter()
    const pathName = usePathname()

    const [ScrollActive, setScrollActive] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrollActive(window.scrollY > 50 || pathName !== '/');
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathName]);

    useEffect(() => {
        setScrollActive(pathName !== '/' || window.scrollY > 0);
    }, [pathName]);

    const dispatch = useDispatch();
    const User = useSelector((state) => state.User);
    // const Modal = useSelector((state) => state.Modal);

    useEffect(() => {
        dispatch(Action_Start('get', '/posts', 'User'));
    }, []);


    return (
        <header className={`${styles.header} ${ScrollActive && styles.headerActive}`}>
            <div className={'position-relative'}>
                <div className={`${styles.headerWrapper} container`}>
                    <span onClick={() => router.push('/')}><img src="/media/rectangle/logo.png" alt=""/></span>
                    {
                        !User ?
                            <nav className={styles.navigation}>
                                <button
                                    onClick={() => dispatch({type: 'Modal', payload: {name: 'sign-up', status: true}})}
                                    className={styles.button}>
                                    Kayıt Ol
                                </button>
                                <button
                                    onClick={() => dispatch({type: 'Modal', payload: {name: 'sign-in', status: true}})}
                                    className={styles.button}>
                                    Giriş Yap
                                </button>
                            </nav>
                            :
                            <nav className={styles.user}>
                                <div className={styles.title}>
                                    <div className={styles.name}>
                                        <span>{User.name}</span>
                                        <img src="/media/icons/arrow-down.png" alt="arrow-down"/>
                                    </div>
                                    <span className={styles.job}>{User.profession}</span>
                                </div>
                                <img className={styles.profilePicture} src="/media/icons/300-31.jpg" alt="300"/>
                                <div className={styles.popup}>
                                    <div onClick={() => router.push('/profile')}>Profilim</div>
                                    <div onClick={() => dispatch({type: 'User', payload: null})}>Çıkış Yap</div>
                                </div>
                            </nav>
                    }


                </div>

                <img className={styles.group20} src="/media/rectangle/group-20.png" alt="group-20"/>
                <img className={styles.group22} src="/media/rectangle/group-22.png" alt="group-22"/>
                <img className={styles.group27} src="/media/rectangle/group-27.png" alt="group-27"/>
            </div>
        </header>
    )
}