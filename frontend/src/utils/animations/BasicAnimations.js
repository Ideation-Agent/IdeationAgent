import { keyframes } from "@emotion/react";

export const TopToBottomKf = keyframes`
        0% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0px);
        }
    `;

export const BottomToTopKf = keyframes`
        0% {
            transform: translateY(10px);
        }
        100% {
            transform: translateY(0px);
        }
    `;

export const ScaleTopToBottomKf = keyframes`
        0% {
            transform: scaleY(0%);
            transform-origin: top;
        }
        100% {
            transform: scaleY(100%);
            transform-origin: top;
        }
    `;

export const ScaleBottomToTopKf = keyframes`
        0% {
            transform: scaleY(0%);
            transform-origin: bottom;
        }
        100% {
            transform: scaleY(100%);
            transform-origin: bottom;
        }
    `;

export const FadeInKf = keyframes`
        0% {
            opacity: 0.1;
        }
        100% {
            opacity: 1;
        }
    `;

export const FadeOutKf = keyframes`
    0% {
        opacity: 1;
    }
    100% {
    opacity: 0;
    }
`;

export const CenterToPopKf = keyframes`
        0% {
            transform: scale(0.2);
        }
        75% {
            transform: scale(1.15);
        }
        100% {
            transform: scale(1);
        }
`;

export const OpacityPopKf = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.1);
    }
    70% {
        transform: scale(1.1);
    }
    100% {
        opacity: 1;
    }
`;

export const PulseKf = keyframes`
        0% {
            opacity: 0.5;
            transform: scale(0.5);
        }
        100% {
            opacity: 0;
            transform: scale(2.75);
        }
`;

export const FadeInOutKf = keyframes`
        0% {
            opacity: 0.5;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0.5;
        }
`;

export const FadeOutInKf = keyframes`
        0% {
            opacity: 0.5;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0.5;
        }
`;
