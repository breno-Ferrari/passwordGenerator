"use client";

import styles from "./button.module.scss"
import { BsArrowRightShort } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
type Props ={
    field:number
}

export default function Button({field}:Props){
    const ref = useRef<HTMLButtonElement>(null)
    const [btn, setBtn] = useState(false)
    let checkedFields = document.querySelectorAll<HTMLInputElement>('form div input[type="checkbox"]:checked')
    let checkedFieldsLength = checkedFields.length;

    useEffect(() => {
        let button =  ref.current  
        if(checkedFieldsLength > 0){
            button!.disabled = false; 
            setBtn(true)
        }else{
            button!.disabled = true; 
            setBtn(false)
        }        
      },[checkedFieldsLength]);

    function GeneratePassword(){
        const inputSenha = document.querySelector<HTMLInputElement>("#senha") as HTMLInputElement;
        console.log("teste");
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
            ...(checkMaiuscula ? maisculas : []),
            ...(checkMinuscula ? minusculas : []),
            ...(checkNumero ? numeros : []),
            ...(checkSimbolo ? simbolos : [])
        ];

        if(caracterDisponiveis.length === 0) return

        for(let i = 0 ; i < field ; i++){
            const posicaoAleatoria = Math.floor(Math.random() * caracterDisponiveis.length);
            senha+=caracterDisponiveis[posicaoAleatoria]
        };
        inputSenha.value = senha     
    };
    return(
        <div className={styles.buttonContainer}>
            <button className={btn?styles.buttonContainer__btn : styles.buttonContainer__disabled} onClick={GeneratePassword} ref={ref}>Criar senha <BsArrowRightShort/></button>
        </div>
    )
}