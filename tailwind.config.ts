import type {Config} from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    '50': '#f5fff6',
                    '100': '#d7ffdd',
                    '200': '#b2ffbd',
                    '300': '#76ff8c',
                    '400': '#33f552',
                    '500': '#09de2b',
                    '600': '#00b91e',
                    '700': '#05901c',
                    '800': '#0a711c',
                    '900': '#0a5d1a',
                    '950': '#00340a',
                },
            },
            container: {
                // you can configure the container to be centered
                center: true,

                // or have default horizontal padding
                padding: '1rem',

                // default breakpoints but with 40px removed
                screens: {
                    sm: '500px',
                    md: '628px',
                    lg: '884px',
                    xl: '1140px',
                },
            },

        },
    },
    plugins: [],
};
export default config;
