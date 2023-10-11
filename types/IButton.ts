export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    update? :(name:string)=>void
}