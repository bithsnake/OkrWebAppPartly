import React from "react";
import { useEffect, useRef, useState } from "react";
import { VictoryPie } from "victory-pie";
let mockData = [
  { x: 'Klarat(Mock)', y: 30, },
  { x: 'Oklarat(Mock)', y: 70, },

];
let newOut = [
  { x: "oklarat", y: 0 },
  { x: "klarat", y: 0 },
];

let result: number;
const whole : number = 100;
const PersonalChart = (props: { goal: number[], progress : number[], ScreenWidth : number}) => {
  const [goals, setGoals] = useState(props.goal);
  const [progress, setProgress] = useState(props.progress);
  const [total, setTotal] = useState(mockData);
  const [out, setOut] = useState(newOut);
  const chartRef = useRef(HTMLDivElement.prototype);
  const clearedRef = useRef(HTMLDivElement.prototype);

  useEffect(() => {
    setGoals(props.goal);
    setProgress(props.progress);
    for (let i = 0; i < props.goal.length; i++) {
      if (!props.goal || props.goal.length === 0) continue;
      const g = goals[i];
      const p = progress[i];
      let n = Math.floor((p === g) ? 100 : (p > g) ? 100 + (g/ p) : (p / g) % 1);
      setTotal(prev => [...prev, { x: "", y: n }])
    }
    return () => {
      setTotal(() => []);
    }
  }, [goals, progress, props.goal, props.progress]);
  
  useEffect(() => {
    let p = 0;
    let g = 0;
    for (let x = 0; x < progress.length; x++) {
      const px = progress[x];
      const gx = goals[x];
      p += px;
      g += gx;
      
    }
    
    let done = p / g;
    let left = 1 - (p / g)
    let t = done;
    
    let resultText = Math.floor(done * 100);  
    let remainderText = Math.ceil(left * 100);
    
    result =  (result < 50) ? Math.round(Number(resultText)) : Math.floor(Number(resultText));
    setOut([
      {
        x: t >= 1 ? "Klarat 100%" : "Klarat " + resultText + "%",
        y: t === 1 ? 100 : t
      },
        
      {
        x: t === 0 ? "Kvar 100%" : "Kvar " + remainderText + "%",
        y: 1 - t,
      }
      ]);
    if (out[0].x === "Klarat 100%") {
      clearedRef.current.classList.add("opacity-100");
      clearedRef.current.classList.remove("opacity-0");
    } else {
      clearedRef.current.classList.add("opacity-0")
      clearedRef.current.classList.remove("opacity-100")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  return (
    <div ref={chartRef} className="pie-chart transform duration-1000 h-auto w-auto" >

      <div style={{ marginLeft: "-37.5%", marginTop: '-37.5%' }} ref={clearedRef} className="z-10 absolute left-1/2 top-1/2 w-3/4   bg-green-100 rounded-full transform transition-all opacity-0 duration-1000 hover:blink">
        <svg xmlns="http://www.w3.org/2000/svg" className=" w-full text-green-900 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <p className="-rotate-12 text-black text-4xl box-border transform transition-all">Avklarat!</p>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {
        out !== newOut &&
        <VictoryPie    
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#FFFFFF",
              strokeWidth: 0,
            },
            labels: {
              fontSize: 20, fill: "black", fontFamily: "roboto", fontWeight: 1000, textShadow: "4px 4px 4px 4px #000000"
            }
          }}
          standalone={true}
          cornerRadius={1}
          innerRadius={185}
          radius={80}
          endAngle={360}
          animate={{
            duration: 800,
            onLoad: { duration: 1000 }
          }}
          data={out}
          colorScale={[`${result === whole ? "rgba(5, 250, 205,255)" : "#ff6161"}`, "white"]}
          />
      }
    </div>
  )
}
export default React.memo(PersonalChart);