
import { ReactNode } from "react";
import { Title } from "./primeryTitle.Styles";

interface TitleProps {
    children: ReactNode;
  }

export function PrimaryTitle({ children }: TitleProps ){
    return <Title>{ children }</Title>;
}