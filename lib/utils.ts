import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {useEffect, useRef} from "react";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


export const useDimensions = (ref: any) => {
    const dimensions = useRef({width: 0, height: 0});

    useEffect(() => {
        dimensions.current.width = ref.current.offsetWidth;
        dimensions.current.height = ref.current.offsetHeight;
    }, []);

    return dimensions.current;
};