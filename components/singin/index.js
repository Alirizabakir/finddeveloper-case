'use client'
import styles from './signin.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

export default function SingIn() {

    const dispatch = useDispatch();
    const Modal = useSelector((state) => state.Modal);
    const [Name, setName] = useState('Ali Rıza Bakır')
    const [Profession, setProfession] = useState('Front End Developer')

    return (<div className={`modal ${Modal.name === 'sign-in' && 'modal-active'}`}
                 onClick={() => dispatch({type: 'Modal', payload: {name: 'sing-up', status: false}})}>
            <div className={`${styles.signinContainer} content ${Modal.name === 'sign-in' && 'content-active'}`}
                 onClick={(e) => e.stopPropagation()}>
                <h1 className={'nunito-bold'}>Giris Yap</h1>
                <label htmlFor="name">
                    <span>Adınız</span>
                    <input id={'name'} type="text" value={Name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label htmlFor="profession">
                    <span>Mesleğiniz</span>
                    <input id={'profession'} type="text" value={Profession}
                           onChange={(e) => setProfession(e.target.value)}/>
                </label>

                <div className={styles.buttonWrapper}>
                    <button onClick={() => dispatch({type: 'Modal', payload: {name: '', status: false}})}>Vazgeç
                    </button>
                    <button onClick={() => {
                        dispatch({type: 'User', payload: {name: Name, profession: Profession}})
                        dispatch({type: 'Modal', payload: {name: '', status: false}})
                    }}>Giriş Yap
                    </button>
                </div>
            </div>
        </div>)
}