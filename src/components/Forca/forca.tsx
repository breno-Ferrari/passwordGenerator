"use client";

import styles from "./forca.module.scss"
import React, { ReactNode } from "react";


type Props ={
    qtd:number,
    children:ReactNode

}
export default function Forca({qtd,children}:Props){
    return(
        <div className={styles.strength}>
        <div className={styles.strength__text}>
            <p className={styles.strength__text__content}>
                Força
            </p>
        </div>
        <div className={styles.strength__nivel}>
            <div className={styles.strength__nivel__container}>
                <p className={styles.strength__nivel__container__content}> 
                    {qtd <=  1 ? "Muito fraco" : ""}
                    {qtd === 2 ? "Fraco" : ""}
                    {qtd === 3 ? "Medio" : ""}
                    {qtd === 4 ? "Forte" : ""}
                </p>
            </div>
            {children}
        </div>
    </div>
    )
}