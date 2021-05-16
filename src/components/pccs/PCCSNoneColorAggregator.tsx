import React from "react";
import {PCCSColor} from "./PCCSColor";
import PCCSColorPoint from "./PCCSColorPoint";
import PCCSNoneColorPoint from "./PCCSNoneColorPoint";

type Props = {
    pccsColors: PCCSColor[],
    positionX: number,
    selectedPccsColors: PCCSColor[],
    activePccsColor: PCCSColor,
    onClick: (pccsColor: PCCSColor) => void
};

const PCCSNoneColorAggregator: React.FC<Props> = (props: Props) => {
    const {pccsColors, positionX, selectedPccsColors, activePccsColor, onClick} = props;
    const containerHeight = 500;

    return (
        <div style={{}}>
            {pccsColors.map((pccsColor) => {
                const selected = selectedPccsColors.some((x) => x.label === pccsColor.label);
                const active = activePccsColor.label === pccsColor.label;
                const top = (10 - pccsColor.hue - 0.5) * containerHeight / 10;
                return <div style={{
                    position: "absolute",
                    top: `${top}px`,
                    left: `${positionX}px`,
                }}
                            key={pccsColor.label}
                >
                    <PCCSNoneColorPoint pccsColor={pccsColor}
                                        selected={selected}
                                        active={active}
                                        onClick={onClick}/>
                </div>
            })}
        </div>
    );
};
export default PCCSNoneColorAggregator;