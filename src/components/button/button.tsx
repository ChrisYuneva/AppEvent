import style from './style.module.css';

interface ButtonProps {
    isBuy?: boolean;
    onClick: () => void;
    children?: React.ReactNode;
}

function Button({ isBuy, children, onClick }: ButtonProps) {
    return (
        <button onClick={onClick} className={isBuy ? `${style.btn} ${style.btn_active}` : `${style.btn}`}>{children}</button>
    )
}

export default Button;