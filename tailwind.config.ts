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
                    '50': '#f4f0ff',
                    '100': '#ebe4ff',
                    '200': '#d9cdff',
                    '300': '#bfa6ff',
                    '400': '#a273ff',
                    '500': '#883bff',
                    '600': '#7e13ff',
                    '700': '#7102ff',
                    '800': '#6501e5',
                    '900': '#4e03af',
                    '950': '#2f0077',
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
