import styles from './Input.module.scss';

export default function Input({
    className,
    error,
    label,
    ...props
}) {
    return (
        <div className={className}>
            <label className={styles.label} htmlFor={props.name}>
                {label}
            </label>
            <input {...props} className={styles.input} aria-invalid={!!error}/>
            {typeof error === `string` && (
                <span className={styles.error} role='alert'>{error}</span>
            )}
        </div>
    );
}
