import React from "react";
import {PCCSColor} from "../pccs/PCCSColor";

type Props = {
    pccsColors: PCCSColor[],
    divProps: JSX.IntrinsicElements['div']
};

const Preview: React.FC<Props> = (props: Props) => {
    const {pccsColors, divProps} = props;
    return (
        <div
            {...divProps}
            style={{
                textAlign: "center",
                backgroundColor: `rgb(${pccsColors[2].r}, ${pccsColors[2].g}, ${pccsColors[2].b})`,
                padding: "1.5rem"
            }}>

            <h1 style={{
                color: `rgb(${pccsColors[0].r}, ${pccsColors[0].g}, ${pccsColors[0].b})`,
            }}>
                from The Book of Mozilla, 12:10
            </h1>
            <span style={{
                color: `rgb(${pccsColors[1].r}, ${pccsColors[1].g}, ${pccsColors[1].b})`,
            }}>
            And the beast shall come forth surrounded by a roiling cloud of vengeance. The house of the unbelievers shall be razed and they shall be scorched to the earth. Their tags shall blink until the end of days.
        </span>
        </div>
    )
};

export default Preview;