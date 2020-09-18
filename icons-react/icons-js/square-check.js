import * as React from "react";

const IconSquareCheck = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-square-check" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x={4} y={4} width={16} height={16} rx={2} /><path d="M9 12l2 2l4 -4" /></svg>;

export default IconSquareCheck;