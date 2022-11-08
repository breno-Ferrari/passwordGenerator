"use client";

import styles from "./config.module.scss"
import { useRef, useState } from "react";
import Forca from "../Forca/forca";
import Progress from "../Progress/progress";
import Button from "../Button/button";


export default function Config(){
    const [field, setField] = useState(1);
    const container = useRef<HTMLDivElement>(null)
    const [qtd, setQtd] = useState(0);
    const MAX = 16;
    
    function getBackgroundSize(){
        return {
          backgroundSize: `${(field * 100) / MAX}% 100%`
        };
    };
    function VerifyInputField(){
        const checkedFields = document.querySelectorAll<HTMLInputElement>('form div input[type="checkbox"]:checked')
        let checkedFieldsLenght = checkedFields.length

        const inputFields = document.querySelectorAll<HTMLInputElement>('form div input')
        const inputFieldsLenght = inputFields.length

        setQtd(checkedFieldsLenght)

        for(let i = 0 ; i <= inputFieldsLenght -1 ; i++){
            let nivel = container.current?.children[i] as HTMLElement | null
            if(nivel != null){
                nivel.style.background = "#18171E";
                nivel.style.borderColor = "#fff"
            }
            for(let j = 0 ; j <= checkedFieldsLenght - 1; j++){
                let subnivel = container.current?.children[j] as HTMLDivElement  
                switch (checkedFieldsLenght) {
                    case 1:
                        subnivel.style.background = "#ed2c49";
                        subnivel.style.borderColor = "#ed2c49"
                        break;
                    case 2:
                        subnivel.style.background = "#ff7300";
                        subnivel.style.borderColor = "#ff7300"
                        break;
                    case 3:
                        subnivel.style.background = "#f1b604";
                        subnivel.style.borderColor = "#f1b604"
                        break;
                    case 4:
                        subnivel.style.background = "lightgreen";
                        subnivel.style.borderColor = "lightgreen";
                        break;
                
                    default:
                        subnivel.style.background = "#18171E";
                        subnivel.style.borderColor = "#fff"
                        break;
                }
            } 
        }
    };

    return(
        <div className={styles.config}>
            <div className={styles.config__container}>
                <h1 className={styles.config__container__title}>Numero de caracteres</h1>
                <p className={styles.config__container__count}>{field}</p>
            </div>
            <div className={styles.config__sliderBar} id="slider">
                <input
                    className={styles.config__sliderBar__slider}
                    type="range"
                    min="1"
                    max={MAX}
                    onChange={(e) => setField(e.target.valueAsNumber)}
                    style={getBackgroundSize()}
                    value={field}
                />
            </div>
            <form className={styles.config__form} onChange={VerifyInputField} id="form">
                <div className={styles.config__form__content}>
                    <input type="checkbox" id="uppercase" name="uppercase" value="uppercase" className={styles.config__form__content__input}></input>
                    <label htmlFor="uppercase" className={styles.config__form__content__label}>Incluir letras maiusculas</label>
                </div>
                <div className={styles.config__form__content}>
                    <input type="checkbox" id="lowercase" name="lowercase" value="lowercase" className={styles.config__form__content__input}></input>
                    <label htmlFor="uppercase" className={styles.config__form__content__label}>Incluir letras minusculas</label>
                </div>
                <div className={styles.config__form__content}>
                    <input type="checkbox" id="numbers" name="numbers" value="numbers" className={styles.config__form__content__input}></input>
                    <label htmlFor="numbers" className={styles.config__form__content__label}>Incluir numeros</label>
                </div>
                <div className={styles.config__form__content}>
                    <input type="checkbox" id="symbols" name="symbols" value="symbols" className={styles.config__form__content__input}></input>
                    <label htmlFor="symbols" className={styles.config__form__content__label}>Incluir simbolos</label>
                </div>       
            </form>
            <Forca qtd={qtd}>
                <Progress ref={container}/>
            </Forca>
            <Button field={field}/>
        </div>

        
    )
                
}