import React, {useEffect, useState} from 'react';
//css
import '../styles/main.css';
import pageStyles from '../styles/PhoneMain.module.css';
//prop
import ModalAlert from '../components/Common/ModalAlert';
import GalaxyAppleBackground from '../components/Layout/GalaxyAppleBackground';
import MainSection from '../components/Sections/MainSection';
import PbtiSection from '../components/Sections/PbtiSection';
import EstimateSection from '../components/Sections/EstimateSection';

const SmartphonePlatform = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // ✅ 여기에 위치해야 함

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollToSection = (section) => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    };

    //모달알림
    const [modalAlert, setModalAlert] = useState({
        isOpen: false,
        type: 'info',
        title: 'title',
        message: 'msg'
    });

    const pcBackgroundStyle = {
        backgroundImage: `
            linear-gradient(rgba(16, 10, 46, 0.6), rgba(26, 35, 126, 0.5), rgba(57, 73, 171, 0.4)),
            url(${process.env.PUBLIC_URL}/image/phone/background.png)
        `
    };
    
    return (
        <div
            className={`${pageStyles.page} ${isMobile ? pageStyles.pageMobile : pageStyles.pagePc}`}
            style={isMobile ? undefined : pcBackgroundStyle}
        >
            <GalaxyAppleBackground isMobile={isMobile}/>
            <MainSection scrollToSection={scrollToSection}/>
            <EstimateSection scrollToSection={scrollToSection} setModalAlert={setModalAlert} isMobile={isMobile}/>
            <PbtiSection scrollToSection={scrollToSection} isMobile={isMobile}/>
            <ModalAlert
                isMobile={isMobile}
                setIsMobile={setIsMobile}
                isOpen={modalAlert.isOpen}
                onClose={() => setModalAlert(prev => ({...prev, isOpen: false}))}
                type={modalAlert.type}
                title={modalAlert.title}
                message={modalAlert.message}
            />
            <footer className={pageStyles.footer}>
                CREATED BY TEAM 2 (KJH, KDY, KYG, OHS, LSG)
            </footer>
        </div>
    );
};

export default SmartphonePlatform;