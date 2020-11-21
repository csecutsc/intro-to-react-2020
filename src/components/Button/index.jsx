import classNames from 'classnames';
import styles from './Button.module.scss';

export default function Button({
    type = `primary`,
    className,
    children,
    icons,
    ...props
}) {
    // Normalize icons param
    if (typeof icons === `function`) icons = { left: icons };
    return (
        <button className={classNames(
            styles[`button--${type}`],
            styles.button,
            className,
        )} {...props}>
            {icons?.left &&  (
                <icons.left
                    className={classNames(
                        styles.icon,
                        styles[`icon--left`],
                    )}
                />
            )}
            {children}
            {icons?.right && (
                <icons.right
                    className={classNames(
                        styles.icon,
                        styles[`icon--right`],
                    )}
                />
            )}
        </button>
    )
}