import '../styles/svgStyle.css';

export const Sunny = () => {
    return (
        <div>
            <p className="weather_status">Sunny</p>
            <svg  className="svg_style" viewBox="0 0 32 32">
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <g stroke="#FFFFFF" strokeWidth="1" transform="translate(2.000000, 2.000000)">
                        <circle cx="14" cy="14" id="Oval-4" r="8"/>
                        <path d="M14,0 L14,3 M23.8994949,4.10050506 L21.7781746,6.22182541 M28,14 L25,14 M23.8994949,23.8994949 L21.7781746,21.7781746 M14,28 L14,25 M4.10050506,23.8994949 L6.22182541,21.7781746 M3.83475851e-17,14 L3,14 M4.10050506,4.10050506 L6.22182541,6.22182541" id="Path-7" strokeLinecap="round"/>
                    </g>
                </g>
            </svg>
        </div>
    )
}

export const Cloudy = () => {
    return (
        <div>
            <p className="weather_status">Cloudy</p>
            <svg className="svg_style" viewBox="0 0 32 32">
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <g stroke="#FFFFFF" strokeWidth="1" transform="translate(3.000000, 6.000000)">
                        <g transform="translate(2.000000, 0.000000)">
                            <path d="M8,7 C8,4.790861 6.209139,3 4,3 C1.790861,3 0,4.790861 0,7 C0,7.74909293 0.205914623,8.45009192 0.564228738,9.04948184"/>
                            <path d="M18.0816219,3.5314731 C16.8758322,1.42182409 14.6039585,0 12,0 C9.53738965,0 7.37179014,1.27165453 6.1240426,3.19412246" strokeLinecap="round"/>
                        </g>
                        <g transform="translate(0.000000, 3.000000)">
                            <path d="M10.1441195,5.03385852 C9.29274212,4.62749472 8.33960485,4.4 7.33333333,4.4 C3.72507297,4.4 0.8,7.32507297 0.8,10.9333333 C0.8,14.5415937 3.72507297,17.4666667 7.33333333,17.4666667 C9.11597284,17.4666667 10.7318603,16.7527163 11.9106557,15.5951556" id="Oval"/><path d="M10.4628116,13.7934799 C11.974939,16.0108696 14.5212905,17.4666667 17.4076616,17.4666667 C22.0468535,17.4666667 25.8076616,13.7058586 25.8076616,9.06666667 C25.8076616,4.42747477 22.0468535,0.666666667 17.4076616,0.666666667 C13.3847405,0.666666667 10.0223343,3.49466753 9.2,7.27111244" strokeLinecap="round"/>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    )
}

export const PartCloudy = () => {
    return (
        <div>
            <p className="weather_status">Part cloudy</p>
            <svg className="svg_style" viewBox="0 0 32 32">
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <g stroke="#FFFFFF" strokeWidth="1" transform="translate(2.000000, 5.000000)">
                        <path d="M12.0414117,7.57296994 C11.6651156,5.90909589 10.1776503,4.66666667 8.4,4.66666667 C6.33813693,4.66666667 4.66666667,6.33813693 4.66666667,8.4 C4.66666667,8.96920193 4.79404975,9.50865195 5.02186366,9.99139781" strokeLinecap="round"/>
                        <g transform="translate(2.000000, 4.000000)">
                            <path d="M10.1441195,5.03385852 C9.29274212,4.62749472 8.33960485,4.4 7.33333333,4.4 C3.72507297,4.4 0.8,7.32507297 0.8,10.9333333 C0.8,14.5415937 3.72507297,17.4666667 7.33333333,17.4666667 C9.11597284,17.4666667 10.7318603,16.7527163 11.9106557,15.5951556"/>
                            <path d="M10.4628116,13.7934799 C11.974939,16.0108696 14.5212905,17.4666667 17.4076616,17.4666667 C22.0468535,17.4666667 25.8076616,13.7058586 25.8076616,9.06666667 C25.8076616,4.42747477 22.0468535,0.666666667 17.4076616,0.666666667 C13.3847405,0.666666667 10.0223343,3.49466753 9.2,7.27111244" strokeLinecap="round"/>
                        </g>
                        <path d="M7.94386176,1.86666667 L7.94386176,0 M12.6913459,4.15627042 L14.1420184,2.98153902 M2.02877844,9.28102555 L0.209954317,9.70093419 M3.19637762,4.15627042 L1.74570516,2.98153902" strokeLinecap="round"/>
                    </g>
                </g>
            </svg>
        </div>
    )
}

export const Snowing = () => {
    return (
        <div>
            <p className="weather_status">Snow</p>
            <svg className="svg_style" viewBox="0 0 32 32">
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <g stroke="#FFFFFF" strokeWidth="1" transform="translate(3.000000, 2.000000)">
                        <path d="M9.64075822,4.50583286 C8.76235298,4.08656863 7.77895738,3.85185185 6.74074074,3.85185185 C3.01793243,3.85185185 0,6.86978428 0,10.5925926 C0,14.3154009 3.01793243,17.3333333 6.74074074,17.3333333 C8.57997198,17.3333333 10.2471575,16.5967179 11.4633749,15.4024092"/>
                        <path d="M9.96956753,13.5435375 C11.529699,15.8313205 14.156887,17.3333333 17.134889,17.3333333 C21.9213568,17.3333333 25.8015556,13.4531345 25.8015556,8.66666667 C25.8015556,3.88019884 21.9213568,0 17.134889,0 C12.9842561,0 9.51510686,2.91777867 8.66666667,6.81411072" strokeLinecap="round"/>
                    </g>
                    <circle cx="14" cy="29" r="1" stroke="#FFFFFF"/>
                    <circle cx="22" cy="23" r="1" stroke="#FFFFFF"/>
                    <circle cx="8.5" cy="22.5" r="1" stroke="#FFFFFF"/>
                    <circle cx="18.5" cy="26.5" r="1" stroke="#FFFFFF"/>
                    <polygon fill="#FFFFFF" points="8 27 7 28.7320508 8 27 6 27 8 27 7 25.2679492 8 27 9 25.2679492 8 27 10 27 8 27 9 28.7320508" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round"/>
                    <polygon fill="#FFFFFF" points="15 23 14 24.7320508 15 23 13 23 15 23 14 21.2679492 15 23 16 21.2679492 15 23 17 23 15 23 16 24.7320508" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round"/>
                    <polygon fill="#FFFFFF" points="22 28 21 29.7320508 22 28 20 28 22 28 21 26.2679492 22 28 23 26.2679492 22 28 24 28 22 28 23 29.7320508" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
            </svg>
        </div>
    )
}

export const Raining = () => {
    return (
        <div className="weather_status">
            <p>Rain</p>
            <svg className="svg_style" viewBox="0 0 32 32">
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <g stroke="#FFFFFF" strokeWidth="1" transform="translate(3.000000, 2.000000)">
                        <g>
                            <path d="M9.64075822,4.50583286 C8.76235298,4.08656863 7.77895738,3.85185185 6.74074074,3.85185185 C3.01793243,3.85185185 0,6.86978428 0,10.5925926 C0,14.3154009 3.01793243,17.3333333 6.74074074,17.3333333 C8.57997198,17.3333333 10.2471575,16.5967179 11.4633749,15.4024092"/>
                            <path d="M9.96956753,13.5435375 C11.529699,15.8313205 14.156887,17.3333333 17.134889,17.3333333 C21.9213568,17.3333333 25.8015556,13.4531345 25.8015556,8.66666667 C25.8015556,3.88019884 21.9213568,0 17.134889,0 C12.9842561,0 9.51510686,2.91777867 8.66666667,6.81411072" strokeLinecap="round"/>
                        </g>
                        <g strokeLinecap="round" transform="translate(17.000000, 20.000000)">
                            <path d="M1,0 L1,2"/>
                            <path d="M1,5 L1,7"/>
                        </g>
                        <g strokeLinecap="round" transform="translate(12.000000, 20.000000)">
                            <path d="M1,0 L1,2"/>
                            <path d="M1,5 L1,7"/>
                        </g>
                        <g strokeLinecap="round" transform="translate(7.000000, 20.000000)">
                            <path d="M1,0 L1,2"/>
                            <path d="M1,5 L1,7"/>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    )
}


// export default Sunny;
// export default Cloudy;