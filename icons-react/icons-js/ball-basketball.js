import * as React from "react";

const IconBallBasketball = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-ball-basketball" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx={12} cy={12} r={9} /><line x1={5.65} y1={5.65} x2={18.35} y2={18.35} /><line x1={5.65} y1={18.35} x2={18.35} y2={5.65} /><path d="M12 3a9 9 0 0 0 9 9" /><path d="M3 12a9 9 0 0 1 9 9" /></svg>;

export default IconBallBasketball;