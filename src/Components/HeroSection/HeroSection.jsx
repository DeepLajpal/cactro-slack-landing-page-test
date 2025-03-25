import React from 'react'
import styles from "./HeroSection.module.css"
import GoogleIcon from "../../assets/google_icon.png";
import HeroImg from "../../assets/hero_img.png";

const HeroSection = () => {
    return (
        <div className={styles['container']}>
            <div className={styles["left"]}>
                <h1>Slack is where the future works</h1>
                <p>Transform the way you work with one place for everyone and everything you need to get stuff done.</p>
                <button>TRY FOR FREE</button>
                <div className={styles["googleButton"]}>
                    <div>
                        <img src={GoogleIcon} alt='GoogleIcon' />
                    </div>
                    <button>SIGN UP WITH GOOGLE</button>
                </div>
            </div>

            <div className={styles["right"]}>
                <img src={HeroImg} alt="" />
            </div>
        </div>
    )
}

export default HeroSection