/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
    
      },

      backgroundImage: {
        gradienttext:
          "linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)",
      },
     colors:{
      'accent': "var(--color-accent)",
        'secondary': "var(--color-secondary)",
        'primary': "var( --color-primary)",
    
     }, 

      textColor: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-succes)",
          fill: "var(--color-background)",
          accent: "var(--color-accent)",
          button: "var(--color-primary)",
          secondary: "var(--color-secondary)",
        }
      },

      backgroundColor: {
        skin: {
          fill: "var(--color-background)",
          primary: "var( --color-primary)",
          accent: "var(--color-accent)",
          secondary: "var(--color-secondary)",
          succes: 'var(--color-succes)'
        },
      },
      gradientColorStops: {
        skin: {
          hue: "var(--color-secondary)",
        },
      },
  
    },

  },
  plugins: [],
};
