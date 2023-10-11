import { ButtonProps } from "@/types/IButton"

export const Button: React.FC<ButtonProps> = ({children ,...rest}) => {
    const { update, name, className,...attributes } = rest;
    const onClick = () => {
        update && update(name!)
    }
    return <button
        name={name}
        onClick={onClick}
        {...attributes}
    >
        {children}
    </button>
}