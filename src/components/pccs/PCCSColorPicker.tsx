import React, {useRef} from "react";
import {PCCSColor, pccsColors, tones} from "./PCCSColor";
import PCCSColorToneAggregator from "./PCCSColorToneAggregator";

type Props = {
    onClick: (pccsColor: PCCSColor) => void,
    divProps: JSX.IntrinsicElements['div']
    selectedPccsColors: PCCSColor[],
    activePccsColor: PCCSColor
};

const PCCSColorPicker: React.FC<Props> = (props: Props) => {
    const {onClick, divProps, selectedPccsColors, activePccsColor} = props;

    return (
        <div
            {...divProps}
        >
            {
                tones.map((tone, index) => {
                    const pccsColorOfThisTone = pccsColors.filter(pccsColor => pccsColor.tone == tone.code);
                    const x = ["v"].includes(tone.code) ? 3 :
                        ["b", "s", "dp"].includes(tone.code) ? 2 :
                            ["lt", "sf", "d", "dk"].includes(tone.code) ? 1 :
                                ["p", "ltg", "g", "dkg"].includes(tone.code) ? 0 : undefined;
                    const y = ["p", "lt"].includes(tone.code) ? 0 :
                        ["b"].includes(tone.code) ? 1 :
                            ["ltg", "sf"].includes(tone.code) ? 2 :
                                ["s", "v"].includes(tone.code) ? 3 :
                                    ["g", "d"].includes(tone.code) ? 4 :
                                        ["dp"].includes(tone.code) ? 5 :
                                            ["dkg", "dk"].includes(tone.code) ? 6 : undefined;
                    if (x === undefined) throw `x is not determined ${tone.code}`
                    if (y === undefined) throw `y is not determined ${tone.code}`

                    return <PCCSColorToneAggregator
                        pccsColors={pccsColorOfThisTone}
                        positionX={x * 160 + 8}
                        positionY={y * 80 + 8}
                        selectedPccsColors={selectedPccsColors}
                        activePccsColor={activePccsColor}
                        onClick={onClick}
                        key={tone.code}
                    />
                })
            }
        </div>
    );
}

export default PCCSColorPicker;