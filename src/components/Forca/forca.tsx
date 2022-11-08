"use client";

import styles from "./forca.module.scss"
import { ReactNode, useEffect, useState } from "react";

type Props ={
    checkedLength:number,
    char:number,
    children:ReactNode

}
export default function Forca({checkedLength,char,children}:Props){
    const [media, setMedia] = useState(0);

    useEffect(()=>{
        if(checkedLength === 0) return
        
        
        
    },[checkedLength,char])
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
                  {checkedLength <=1 ? "Muito Fraco" : ""}
                  {checkedLength === 2? "Fraco" : ""}
                  {checkedLength === 3? "Medio" : ""}
                  {checkedLength === 4? "Forte" : ""}
                </p>
            </div>
            {children}
        </div>
    </div>
    )
}