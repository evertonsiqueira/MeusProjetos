import { Button } from "@material-tailwind/react";
import { Children } from "react";

export const ButtonLogin = ({size,className,color,text,children}) =>{
    return(
        <div className="flex items-center jutify-center mb-2 ">
            <Button size={size} className={className} color={color}>
       {text}
       {children}
       
            </Button>
        </div>
    )
}
