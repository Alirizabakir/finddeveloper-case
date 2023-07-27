'use client'
import styles from './popularSearchs.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import {Action_Start} from "@/store/action";

export default function PopularSearches() {
    const dispatch = useDispatch();
    const PopularSearchesData = useSelector((state) => state.PopularSearches);

    useEffect(() => {
        dispatch(Action_Start('get', '/posts', 'PopularSearches'));
    }, []);

    const [StartX, setStartX] = useState(0)
    const [IsDragging, setIsDragging] = useState(false)
    const PopularList = useRef(null)
    const handleWheel = (e) => {
        PopularList.current.scrollLeft = PopularList.current.scrollLeft + e.deltaY;
    }
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX);
    }
    const handleMouseUp = (e) => {
        e.preventDefault();
        setIsDragging(false);
    }
    const handleMouseMove = (e) => {
        if (IsDragging) {
            const container = PopularList.current;
            const deltaX = e.pageX - StartX;
            container.scrollLeft += -deltaX * 150;
            setStartX(e.pageX);
        }
    }
    return (
        <div className={styles.content}>
            <div className={`${styles.popularSearchsContainer}`}>
                <div className={`container ${styles.popularSearchs}`}>
                    <h4>Popüler aramalar</h4>

                    <ul onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onWheel={handleWheel}
                        ref={PopularList} className={`${styles.carousel} scroll-none scroll-behavior`}>
                        {
                            PopularSearchesData.length > 0 && PopularSearchesData.map((item, index) => (
                                <li key={`${item.title}-${index}`}>
                                    <button>{item.title}</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}