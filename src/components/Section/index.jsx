import classNames from 'classnames';
import styles from './Section.module.scss';

export default function Section({
    tag = `section`,
    containerClassName,
    className,
    children,
}) {
    const Component = tag;
    return (
        <Component className={classNames(styles.container, containerClassName)}>
            <div className={classNames(styles.content, className)}>
                {children}
            </div>
        </Component>
    );
}