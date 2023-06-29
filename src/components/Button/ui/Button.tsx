import React, {FC} from "react";
import {IButtonProps} from "../types";

export const Button: FC<IButtonProps> = React.memo(({onClick}) =>{
    console.log('Button rendered')
    return (
        <button type="button" onClick={onClick}>
            get random user
        </button>
    );
})
