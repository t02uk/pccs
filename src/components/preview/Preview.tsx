import React from "react";
import {animated, useSpring} from "react-spring";
import {PCCSColor, pccsToCssRgb} from "../pccs/PCCSColor";

type Props = {
    pccsColors: PCCSColor[],
    divProps: Omit<JSX.IntrinsicElements['div'], 'ref'>
};

const Preview: React.FC<Props> = (props: Props) => {
    const {pccsColors, divProps} = props;

    const style2 = useSpring({
        to: {
            backgroundColor: `${pccsToCssRgb(pccsColors[2])}`
        }
    });
    const style0 = useSpring({
        to: {
            color: `${pccsToCssRgb(pccsColors[0])}`
        }
    });
    const style1 = useSpring({
        to: {
            color: `${pccsToCssRgb(pccsColors[1])}`
        }
    });

    return (
        <animated.div
            {...divProps}
            style={{
                textAlign: "center",
                padding: "1.5rem",
                ...style2
            }}>

            <animated.h1 style={{
                ...style0
            }}>
                from The Book of Mozilla, 12:10
            </animated.h1>
            <animated.span style={{
                ...style1
            }}>
                And the beast shall come forth surrounded by a roiling cloud of vengeance. The house of the unbelievers
                shall be razed and they shall be scorched to the earth. Their tags shall blink until the end of days.
            </animated.span>
        </animated.div>
    )
};

export default Preview;