import React from 'react';
import { Link } from "gatsby";
import classNames from "classnames"

// Styles
import styles from "./footer.module.scss";

const FooterOutro = (props) => {

    const footerQuoteClass = classNames(
        styles.footerQuote,
        props.quote ? styles.quote : styles.default
    )

    if (props.quote) {

        return (
            <div className={footerQuoteClass}>
                <div className="container">
                    <h1>“</h1>
                    {props.quote.text}
                    <p>- {props.quote.author}</p>
                </div>
                <div className={styles.outroCircle}></div>
            </div>
        )
    } else {
        return (
            <div className={footerQuoteClass}>
                <div className="container">
                    <h1>{props.default.heading}</h1>
                    <p>{props.default.text}</p>
                    <button className="button">
                        <Link to={props.default.to}>{props.default.buttonText}</Link>
                    </button>
                </div>
                <div className={styles.outroCircle}></div>
            </div>
        )
    }
}

export default FooterOutro
