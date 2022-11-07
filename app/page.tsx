"use client";

import styles from "../styles/home.module.scss"

import ShowPassword from "../src/components/ShowPassword/showPassword";
import Config from "../src/components/Config/config";
export default function Page(){

    return(
        <section className={styles.container}>
            <h1 className={styles.container__title}>Password Generator</h1>
            <ShowPassword/>
            <div className={styles.container__box}>
                <Config />
            </div>
        </section>
    )
}