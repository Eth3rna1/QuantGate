import React from "react";


type Color = "red" | "green";
type TimeFrame = "1m" | "2m" | "3m" | "4m" | "5m" | "10m";

type BubbleProp = {
    color: Color,
    timeFrame : TimeFrame,
    percentChange : number,
    opacityChangeRate: number,
    usePercent : boolean,
}

const Bubble: React.FC<BubbleProp> = ({
    color,
    timeFrame,
    percentChange,
    opacityChangeRate,
    usePercent
}: BubbleProp) => {
    const content = usePercent ? percentChange : timeFrame;
    return <svg height="200" width="200">
        <circle id="circle" fill={color} r={percentChange} cx="50%" cy="50%"/>
        <circle fill="white" stroke="black" stroke-width="1" r="20" cx="50%" cy="50%"/>
        <text
            x="50%"
            y="50%"
            text-anchor="center"
            dominant-baseline="middle"
            dx="-6%"
        >
            {content}
        </text>
    </svg>;
}

export default Bubble;
