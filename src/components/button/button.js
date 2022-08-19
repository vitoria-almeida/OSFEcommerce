import styles from './button.module.css'

function Button({style, text}) {
    return (
        <button className={styles.button} style={{ ...style }}>
            {text}
        </button>
    )
}

export default Button