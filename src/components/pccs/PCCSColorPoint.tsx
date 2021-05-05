import React from "react";
import {PCCSColor} from "./PCCSColor";

type Props = {
    pccsColor: PCCSColor,
    onClick: (pccsColor: PCCSColor) => void,
    selected: boolean,
    active: boolean
}

const PCCSColorPoint: React.FC<Props> = (props: Props) => {
    const {pccsColor, onClick, active, selected} = props;
    return (
        <div style={
            {
                width: '20px',
                height: '10px',
                backgroundColor: `rgb(${pccsColor.r}, ${pccsColor.g}, ${pccsColor.b})`,
                display: "table",
                boxSizing: 'border-box',
                boxShadow: active ? '3px 3px #999' :
                    selected ? '3px 3px #ccc' :
                    'none'

            }
        }
             onClick={() => onClick(pccsColor)}
        >
        </div>
    )
}
export default PCCSColorPoint;