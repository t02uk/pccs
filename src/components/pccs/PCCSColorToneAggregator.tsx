import React from "react";
import {PCCSColor} from "./PCCSColor";
import PCCSColorPoint from "./PCCSColorPoint";

type Props = {
    pccsColors: PCCSColor[],
    positionX: number,
    positionY: number,
    selectedPccsColors: PCCSColor[],
    activePccsColor: PCCSColor,
    onClick: (pccsColor: PCCSColor) => void
};

const PCCSColorToneAggregator: React.FC<Props> = (props: Props) => {
    const {pccsColors, positionY, positionX, selectedPccsColors, activePccsColor, onClick} = props;
    const containerSize = 100;

    return (
        <div style={{}}>
            {pccsColors.map((pccsColor) => {
                const selected = selectedPccsColors.some((x) => x.label === pccsColor.label);
                const active = activePccsColor.label === pccsColor.label;
                const arcDegree = (pccsColor.hue + 10) * 360 / 24;
                if (pccsColor.hue % 2 !== 0) return undefined;
                return <div style={{
                    position: "absolute",
                    top: `${positionY}px`,
                    left: `${positionX}px`,
                    transform: `translate(${containerSize / 2}px, ${containerSize / 2}px) rotate(${arcDegree}deg) translate(${containerSize / 2}px, 0px)`
                }}
                            key={pccsColor.label}
                >
                    <PCCSColorPoint pccsColor={pccsColor}
                                    selected={selected}
                                    active={active}
                                    onClick={onClick} />
                </div>
            })}
        </div>
    );
}
export default PCCSColorToneAggregator;