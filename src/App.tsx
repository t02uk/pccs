import React, {useCallback, useState} from 'react'
import {PCCSColor, pccsColors, tones} from "./components/pccs/PCCSColor";
import PCCSColorPicker from "./components/pccs/PCCSColorPicker";
import "./App.css"
import ControlBoard from "./components/control-board/ControlBoard";
import Preview from "./components/preview/Preview";

export default function App() {
    const [selectedColor, setSelectedColor] = useState<PCCSColor>(pccsColors[1]);
    const [selectedPccsColors, setSelectedPccsColors] = useState<PCCSColor[]>([pccsColors[96], pccsColors[24], pccsColors[0]]);
    const [activeColorIndex, setActiveColorIndex] = useState(0);

    const onClickPCCSColorPicker = useCallback((pccsColor: PCCSColor) => {
        setSelectedColor(pccsColor);

        const copied = [...selectedPccsColors];
        copied[activeColorIndex] = pccsColor;
        setSelectedPccsColors(copied);
    }, [activeColorIndex]);

    const onClickControlBoard = useCallback((nextActiveColorIndex: number) => {
        setActiveColorIndex(nextActiveColorIndex);
    }, [])

    return (
        <div className="main" style={{}}>
            <PCCSColorPicker divProps={{className: 'pccs-color-picker'}}
                             selectedPccsColors={selectedPccsColors}
                             activePccsColor={selectedPccsColors[activeColorIndex]}
                             onClick={onClickPCCSColorPicker}/>
            <ControlBoard activeColorIndex={activeColorIndex} pccsColors={selectedPccsColors}
                          onClick={onClickControlBoard}
                          divProps={{
                              className: 'control-board'
                          }}/>
            <Preview pccsColors={selectedPccsColors}
                     divProps={{
                         className: 'preview'
                     }}
            />
        </div>
    )
}