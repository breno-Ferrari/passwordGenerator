"use client";

import styles from "./button.module.scss"
import { BsArrowRightShort } from "react-icons/bs";
type Props ={
    field:number
}

export default function Button({field}:Props){
    function GeneratePassword(){
        const inputSenha = document.querySelector<HTMLInputElement>("#senha") as HTMLInputElement;
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

        if(caracterDisponiveis.length === 0) return -1
        
        for(let i = 0 ; i < field ; i++){
            const posicaoAleatoria = Math.floor(Math.random() * caracterDisponiveis.length);
            senha+=caracterDisponiveis[posicaoAleatoria]
        };
        inputSenha.value = senha     
    };
    return(
        <div className={styles.buttonContainer}>
            <button className={styles.buttonContainer__btn} onClick={GeneratePassword}>Criar senha <BsArrowRightShort/></button>
        </div>
    )
}