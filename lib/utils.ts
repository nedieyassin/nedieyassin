import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {useEffect, useRef} from "react";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


export const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener('mouseup', handleClickOutside);
        document.addEventListener('touchend', handleClickOutside);


        return () => {
            document.removeEventListener('mouseup', handleClickOutside);
            document.removeEventListener('touchend', handleClickOutside);
        };
    }, [callback]);

    return ref;
};
