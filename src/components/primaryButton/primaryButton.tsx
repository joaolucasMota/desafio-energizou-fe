import { ReactNode } from 'react';
import { Button } from "./primaryButton.Styles"
import { useNavigate } from 'react-router-dom';


interface ButtonProp {
    children: ReactNode; 
    url? : string
    onClick?: () => void;
  }

export function PrimaryButton({ children, url, onClick}: ButtonProp ){

    let navigate = useNavigate();

    const handleClick = () => {
        if (url) {
            navigate(url);
        } else if (onClick) {
          onClick();
        }
      };

    return <Button onClick={handleClick}>{children}</Button>;
}