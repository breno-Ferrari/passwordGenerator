"use client";

import styles from "./progress.module.scss"
import React from "react";

const Progress = React.forwardRef((props, refDiv) => (
    <div className={styles.progress} ref={refDiv as React.RefObject<HTMLDivElement>} {...props}>
        <div className={styles.progress__container}></div>
        <div className={styles.progress__container}></div>
        <div className={styles.progress__container}></div>
        <div className={styles.progress__container}></div>
    </div>
));

Progress.displayName = "Progress";

export default Progress;
