'use client';

import * as styles from './page.css';
import { useCountStore } from './stores';
import Header from './components/header';
import Footer from './components/footer';

import Image from 'next/image';
import backgroundImg from './assets/images/jinDev_logo_modern.webp';
import { GoSearch } from "react-icons/go";
import { FcEnteringHeavenAlive } from "react-icons/fc";



export default function Home() {
  const { count, inc, dec, removeAllCount } = useCountStore();
//https://velog.io/@yeonsubaek/%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A1%9C-chatGPT-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0
//OPen API + react 연동
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}> <Header /></div>

      <div className={styles.columns}>
        <nav className={styles.nav}>
          <span>{count}</span>

        </nav>
        <div className={styles.mainContent}>
          <div className={styles.mainLogo}>
          <Image src ={backgroundImg} alt='mainLogo'/>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputIconLeft}>
              <GoSearch/>
            </div>
            <textarea className={styles.mainInput} placeholder='Enter your text'></textarea>
            
            <div className={styles.inputIconRight}>
              <FcEnteringHeavenAlive/>
            </div>
          </div>
          <button type="button" onClick={inc}>
            one up
          </button>
          <button type="button" onClick={dec}>
            one down
          </button>
          <button type="button" onClick={removeAllCount}>
            Reset
          </button>
        </div>
        <div className={styles.aside}>SideBar</div>
      </div>
      <div className={styles.footer}>
        <Footer/>
      </div>
    </div>
  );
}
