import React from "react";
import {animated, useSpring } from "react-spring";
import {PCCSColor} from "./PCCSColor";

type Props = {
    pccsColor: PCCSColor,
    onClick: (pccsColor: PCCSColor) => void,
    selected: boolean,
    active: boolean
};

const PCCSNoneColorPoint: React.FC<Props> = (props: Props) => {
    const {pccsColor, onClick, active, selected} = props;
    const style = useSpring({
        to: {
            boxShadow: active ? '4px 4px #999' :
                selected ? '4px 4px #ccc' :
                    '0px 0px transparent',
        }
    });

    return (
        <animated.div style={
            {
                border: `solid 1px #000`,
                height: '20px',
                width: "48px",
                backgroundColor: `rgb(${pccsColor.r}, ${pccsColor.g}, ${pccsColor.b})`,
                display: "table",
                boxSizing: 'border-box',
                cursor: 'pointer',
                ...style
            }
        }
             onClick={() => onClick(pccsColor)}
        >
        </animated.div>
    )
}
export default PCCSNoneColorPoint;