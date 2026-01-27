import React from "react";
import "./bubble.css"


type Color = "red" | "green";
type TimeFrame = "1m" | "2m" | "3m" | "4m" | "5m" | "10m";

type BubbleProp = {
    color: Color,
    timeFrame : TimeFrame,
    percentChange : number,
    opacityChangeRate: number,
    usePercent : boolean,
}

/*
 * Computes the radius of a ring based on a percentage value,
 * taking into account the inner (fixed) circle so that growth
 * is area-proportional rather than purely linear.
 *
 * @param percentChange - A number between 0 and 1 representing
 *                        the fraction of growth from inner to outer radius.
 * @param innerRadius - Radius of the fixed inner circle.
 * @param outerRadius - Maximum outer radius of the ring.
 * @returns The computed outer radius of the ring.
*/
const calculateRingRadius = (
    percentChange: number,
    innerRadius: number,
    outerRadius: number
) => {
    return Math.sqrt(innerRadius ** 2 + percentChange * (outerRadius ** 2 - innerRadius ** 2));
}

const INNER_RADIUS: number = 20;
const OUTER_RADIUS: number = 100;

const Bubble: React.FC<BubbleProp> = ({
    color,
    timeFrame,
    percentChange,
    opacityChangeRate,
    usePercent
}: BubbleProp) => {
    const content = usePercent ? percentChange : timeFrame;
    let relativePercent = calculateRingRadius(percentChange, INNER_RADIUS, OUTER_RADIUS)
    return <svg height="200" width="200">
        <circle id="circle" fill={color} r={relativePercent} cx="50%" cy="50%"/>
        <circle fill="white" stroke="black" stroke-width="1" r={INNER_RADIUS} cx="50%" cy="50%"/>
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
