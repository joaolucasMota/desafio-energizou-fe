import { ContainerMain } from "./container.Styles"
import { ReactNode } from "react"

interface ContainerProps{
    children : ReactNode
}

export function Container({ children } : ContainerProps){
    return <ContainerMain>{ children }</ContainerMain>
}