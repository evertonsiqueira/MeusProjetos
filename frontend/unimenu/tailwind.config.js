const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports =withMT( {
  content: ["./src/**/*.{html,js}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
  
    extend: {
      colors:{
        
      },
    },
   
  },
  
  plugins: [],

});

