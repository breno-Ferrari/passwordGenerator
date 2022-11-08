"use client";

import styles from "./showPassword.module.scss"
import { FaRegCopy } from 'react-icons/fa';
import { useRef } from "react";


export default function ShowPassword(){
    const ref = useRef<HTMLInputElement>(null);
    function copyValue(){
        const copyText = ref?.current?.value
        navigator.clipboard.writeText(copyText as string)
    };
    return(
        <div className={styles.showPassword}>
            <input placeholder="P4$5W0rD!" id="senha" name="senha" maxLength={16} ref={ref} className={styles.showPassword__content} readOnly/>
            <button className={styles.showPassword__copy} onClick={copyValue}><FaRegCopy/></button>
        </div>
    )
}