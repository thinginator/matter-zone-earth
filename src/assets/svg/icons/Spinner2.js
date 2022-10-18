import * as React from "react";

const Spinner2 = (props) => (
    <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"

        style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 1.5,
        }}
        {...props}
    >
        <path
            d="M43.66,26.34C43.66,22.841 46.501,20 50,20C53.499,20 56.34,22.841 56.34,26.34C58.089,23.31 61.97,22.27 65,24.019C68.03,25.769 69.07,29.649 67.321,32.679C70.351,30.93 74.231,31.97 75.981,35C77.73,38.03 76.69,41.911 73.66,43.66C77.159,43.66 80,46.501 80,50C80,53.499 77.159,56.34 73.66,56.34C76.69,58.089 77.73,61.97 75.981,65C74.231,68.03 70.351,69.07 67.321,67.321C69.07,70.351 68.03,74.231 65,75.981C61.97,77.73 58.089,76.69 56.34,73.66C56.34,77.159 53.499,80 50,80C46.501,80 43.66,77.159 43.66,73.66C41.911,76.69 38.03,77.73 35,75.981C31.97,74.231 30.93,70.351 32.679,67.321C29.649,69.07 25.769,68.03 24.019,65C22.27,61.97 23.31,58.089 26.34,56.34C22.841,56.34 20,53.499 20,50C20,46.501 22.841,43.66 26.34,43.66C23.31,41.911 22.27,38.03 24.019,35C25.769,31.97 29.649,30.93 32.679,32.679C30.93,29.649 31.97,25.769 35,24.019C38.03,22.27 41.911,23.31 43.66,26.34Z"
            style={{
                fill: "none",
                stroke: "currentcolor",
                strokeWidth: "0.15em",
            }}
        />
    </svg>
);

export default Spinner2;
