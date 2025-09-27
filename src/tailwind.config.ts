// tailwind.config.ts
import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');


const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};

export default config;
