
import { Input } from "@material-tailwind/react";
 
export function InputLogin({label,type="text",placeholder,color}) {
  return (
    <div className="w-78 mb-5 space-y-2 ">
      <Input  color={color} label={label} type={type} placeholder={placeholder}/>
     
    </div>
  );
}