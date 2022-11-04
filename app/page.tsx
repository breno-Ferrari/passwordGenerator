"use client";

import styles from "../styles/home.module.scss"
import { FaRegCopy } from 'react-icons/fa';
import { HtmlHTMLAttributes, MutableRefObject, useRef, useState } from "react";
export default function Page(){

    const [field, setField] = useState(1);
    const [qtd, setQtd] = useState(0);
    const [senha, setSenha] = useState("");
    const ref = useRef<HTMLInputElement>(null);
    const container = useRef<HTMLDivElement>(null);
    const MAX = 16;
   
    function getBackgroundSize(){
      return {
        backgroundSize: `${(field * 100) / MAX}% 100%`
      };
    };

    function copyValue(){
        const copyText = ref?.current?.value
        navigator.clipboard.writeText(copyText as string)
    };

    function VerifyInputField(){
        const checkedFields = document.querySelectorAll<HTMLInputElement>('form div input[type="checkbox"]:checked')
        let checkedFieldsLenght = checkedFields.length

        const inputFields = document.querySelectorAll<HTMLInputElement>('form div input')
        const inputFieldsLenght = inputFields.length

        setQtd(checkedFieldsLenght)

        for(let i = 0 ; i <= inputFieldsLenght -1 ; i++){
            let nivel = container.current?.children[i] as HTMLDivElement  
            nivel.style.background = "#18171E";
            nivel.style.borderColor = "#fff"
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

    function GeneratePassword(){
        const inputSenha = document.querySelector<HTMLInputElement>("#senha") as HTMLDivElement;
        
        const minusculas = "abcdefghijklmnopqrstuvwxyz".split("");
        const maisculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        const numeros = "0123456789".split("");
        const simbolos = "!@#$%&*".split("");
        
        let checkMaiuscula = document.querySelector<HTMLInputElement>("#uppercase")?.checked;
        let checkMinuscula = document.querySelector<HTMLInputElement>("#lowercase")?.checked;
        let checkNumero = document.querySelector<HTMLInputElement>("#numbers")?.checked;
        let checkSimbolo = document.querySelector<HTMLInputElement>("#symbols")?.checked;
       
        let senha = ""

        const caracterDisponiveis = [
            ...(checkMaiuscula ? minusculas : []),
            ...(checkMinuscula ? maisculas : []),
            ...(checkNumero ? numeros : []),
            ...(checkSimbolo ? simbolos : [])
        ];

        if(caracterDisponiveis.length === 0) return -1
        
        for(let i = 0 ; i < field ; i++){
            const posicaoAleatoria = Math.floor(Math.random() * caracterDisponiveis.length);
            senha+=caracterDisponiveis[posicaoAleatoria]
        };

        setSenha(senha)
       
        
        
    };



    return(
        <section className={styles.container}>
            <h1 className={styles.container__title}>Password Generator</h1>
            <div className={styles.container__showPassword}>
                <input placeholder="P4$5W0rD!" id="senha" name="senha" maxLength={16} ref={ref} className={styles.container__showPassword__content} defaultValue={senha}/>
                <button className={styles.container__showPassword__copy} onClick={copyValue}><FaRegCopy/></button>
            </div>
            <div className={styles.container__box}>
                <div className={styles.container__box__config}>
                    <div className={styles.container__box__config__container}>
                        <h1 className={styles.container__box__config__container__title}>Numero de caracteres</h1>
                        <p className={styles.container__box__config__container__count}>{field}</p>
                    </div>
                    <div className={styles.container__box__config__sliderBar} id="slider">
                        <input
                            className={styles.container__box__config__sliderBar__slider}
                            type="range"
                            min="1"
                            max={MAX}
                            onChange={(e) => setField(e.target.valueAsNumber)}
                            style={getBackgroundSize()}
                            value={field}
                        />
                </div>
                <form className={styles.container__box__config__form} onChange={VerifyInputField}>
                    <div className={styles.container__box__config__form__content}>
                        <input type="checkbox" id="uppercase" name="uppercase" value="uppercase" className={styles.container__box__config__form__content__input}></input>
                        <label htmlFor="uppercase" className={styles.container__box__config__form__content__label}>Incluir letras maiusculas</label>
                    </div>
                    <div className={styles.container__box__config__form__content}>
                        <input type="checkbox" id="lowercase" name="lowercase" value="lowercase" className={styles.container__box__config__form__content__input}></input>
                        <label htmlFor="uppercase" className={styles.container__box__config__form__content__label}>Incluir letras minusculas</label>
                    </div>
                    <div className={styles.container__box__config__form__content}>
                        <input type="checkbox" id="numbers" name="numbers" value="numbers" className={styles.container__box__config__form__content__input}></input>
                        <label htmlFor="numbers" className={styles.container__box__config__form__content__label}>Incluir numeros</label>
                    </div>
                    <div className={styles.container__box__config__form__content}>
                        <input type="checkbox" id="symbols" name="symbols" value="symbols" className={styles.container__box__config__form__content__input}></input>
                        <label htmlFor="symbols" className={styles.container__box__config__form__content__label}>Incluir simbolos</label>
                    </div>       
                </form>
                </div>
                <div className={styles.container__box__config__strength}>
                    <div className={styles.container__box__config__strength__text}>
                        <p className={styles.container__box__config__strength__text__content}>
                            Força
                        </p>
                    </div>
                    <div className={styles.container__box__config__strength__nivel}>
                        <div className={styles.container__box__config__strength__nivel__container}>
                            <p className={styles.container__box__config__strength__nivel__container__content}>
                                {qtd <=  1 ? "Muito fraco" : ""}
                                {qtd === 2 ? "Fraco" : ""}
                                {qtd === 3 ? "Medio" : ""}
                                {qtd === 4 ? "Forte" : ""}
                            </p>
                        </div>
                        <div className={styles.container__box__config__strength__nivel__progress} ref={container}>
                            <div className={styles.container__box__config__strength__nivel__progress__container}></div>
                            <div className={styles.container__box__config__strength__nivel__progress__container}></div>
                            <div className={styles.container__box__config__strength__nivel__progress__container}></div>
                            <div className={styles.container__box__config__strength__nivel__progress__container}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.container__box__config__buttonContainer}>
                    <button onClick={GeneratePassword} className={styles.container__box__config__buttonContainer__btn}>Criar senha</button>
                </div>
            </div>
        </section>
    )
}