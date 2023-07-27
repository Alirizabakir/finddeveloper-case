'use client';
import styles from './carousel.module.css'
import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Action_Start} from "@/store/action";

export default function Carousel() {
    const dispatch = useDispatch();
    const JobPostings = useSelector((state) => state.JobPostings);

    useEffect(() => {
        dispatch(Action_Start('get', '/posts', 'JobPostings'));
    }, []);

    const CarouselRef = useRef()

    const NavMove = (status) => {
        CarouselRef.current.scrollLeft = CarouselRef.current.scrollLeft + (status ? CarouselRef.current.offsetWidth : -(CarouselRef.current.offsetWidth / 2))
    }

    return (
        <div className={'container'}>
            <h4 className={styles.header}>Öne Çıkan İş İlanları</h4>
            <div className={styles.carouselContainer}>
                <ul ref={CarouselRef} className={'scroll-none scroll-behavior'}>
                    {
                        JobPostings.length > 0 && JobPostings.map((item, index) => (
                            <li key={`${item.position}-${index}`}>
                                <div className={styles.title}>
                                    <h5 className={'text-overflow'}>{item.position}</h5>
                                    <p className={'text-overflow'}>{item.owner}</p>
                                </div>
                                <img src={`/media/popular/${item.slug}.png`} alt=""/>
                            </li>
                        ))
                    }
                </ul>

                <span onClick={() => NavMove(false)} className={styles.prev}>
                    <img src="/media/icons/arrow-left.svg" alt=""/>
                </span>
                <span onClick={() => NavMove(true)} className={styles.next}>
                    <img src="/media/icons/arrow-right.svg" alt=""/>
                </span>
            </div>
        </div>
    )
}