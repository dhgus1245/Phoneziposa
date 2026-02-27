import React, { useRef, useState } from "react";
import {BarChart3, Users} from 'lucide-react';
import sharedStyles from '../../styles/shared.module.css';
import styles from '../../styles/MainSection.module.css';

const MainSection = ({scrollToSection})  => {
    const videoRef = useRef(null);
    const [showOverlay, setShowOverlay] = useState(true); // 처음만 true

    const handleStartPlay = () => {
        videoRef.current.play();
        setShowOverlay(false); // 재생하면 이미지 제거
    };

    return (
        <section id="main" className={`${sharedStyles.section} ${styles.sectionOffset}`}>
            <div className={sharedStyles.container}>
                {/* 홍보영상 */}
                <div className={styles.videoCard}>
                    <video
                        ref={videoRef}
                        src="/video/phone/ai_promotion.mp4"
                        className={styles.video}
                        controls
                    />

                    {showOverlay && (
                        <div
                            onClick={handleStartPlay}
                            className={styles.overlay}
                        >
                            <img
                                src="/image/phone/play_cat.png"
                                alt="play_cat"
                                className={styles.overlayIcon}
                            />
                        </div>
                    )}
                </div>

                {/*24h 네온사인*/}
                <div className={styles.neonSign}>
                    <div className={styles.neonTextTop}>24h
                    </div>
                    <div className={styles.neonTextBottom}>OPEN
                    </div>
                </div>

                {/* 버튼 DIV */}
                <div className={styles.buttonColumn}>

                    {/* 견적분석 버튼 */}
                    <button
                        onClick={() => scrollToSection('estimate')}
                        className={`${styles.ctaButton} ${styles.ctaEstimate}`}
                    >
                        <BarChart3 size={20}/>
                        견적분석
                    </button>

                    {/* PBTI 버튼 */}
                    <button
                        onClick={() => scrollToSection('pbti')}
                        className={`${styles.ctaButton} ${styles.ctaPbti}`}
                    >
                        <Users size={20}/>
                        유형 테스트
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MainSection;