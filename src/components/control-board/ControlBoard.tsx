import React, {ReactElement, useCallback} from "react";
import {PCCSColor, pccsColors} from "../pccs/PCCSColor";

type Props = {
    activeColorIndex: number,
    pccsColors: PCCSColor[],
    divProps: JSX.IntrinsicElements['div']
    onClick: (activeColorIndex: number) => void
};

const ControlBoard: React.FC<Props> = (props: Props) => {
    const {activeColorIndex, pccsColors, divProps, onClick} = props;

    return (
        <div
            {...divProps}
        >
            {pccsColors.map((pccsColor, index) => {
                const onWrappedOnClick = useCallback(() => {
                    onClick(index);
                }, [index])
                return <ColorIndicator pccsColor={pccsColor} active={index === activeColorIndex}
                                       onClick={onWrappedOnClick}
                                       key={index}/>
            })}
        </div>
    );
};

type ColorIndicatorProps = {
    pccsColor: PCCSColor,
    active: boolean,
    onClick: () => void
}
const ColorIndicator: React.FC<ColorIndicatorProps> = (props: ColorIndicatorProps) => {
    const {pccsColor, active, onClick} = props;

    const fontColor = pccsColor.v > 0.7 ? '#333' : '#fff';

    return (
        <div className="" style={{
            backgroundColor: `rgb(${pccsColor.r}, ${pccsColor.g}, ${pccsColor.b})`,
            height: "33%",
            position: "relative"
        }} onClick={() => onClick()}>
            <div style={{
                color: fontColor,
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                margin: "auto",
                width: "16em",
                height: "2.7em"
            }}>
                <div style={{
                    fontSize: "115%"
                }}>
                    {active ? '☑' : '☐'}
                    &nbsp;
                    {pccsColor.label}</div>
                <div style={{
                    fontSize: "75%"
                }}
                >* RGB:(#{pccsColor.r.toString(16)}, {pccsColor.g.toString(16)}, {pccsColor.b.toString(16)})</div>
                <div style={{
                    fontSize: "75%"
                }}
                >* HSV:({pccsColor.h.toFixed(0)}, {pccsColor.s.toFixed(3)}, {pccsColor.v.toFixed(3)})</div>
            </div>
        </div>
    );
}

export default ControlBoard;