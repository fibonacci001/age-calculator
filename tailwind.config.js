/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', serif",
      },
      fontFamily: {
        Poppins: "'Poppins', sans-serif",
      },
      colors: {
        my_Purple: {
          100: ' hsl(259, 100%, 65%)'
        },
        Light_red: {
          100: ' hsl(0, 100%, 67%)'
        },
        Smokey_grey: {
          100: ' hsl(0, 1%, 44%)'
        },
        Light_grey: {
          100: ' hsl(0, 0%, 86%)'
        },
        Off_black: {
          100: ' hsl(0, 0%, 8%)'
        },

      },
      screens: {
        'xs': '300px',
        // other screens ...
      }
    },
  },
  plugins: [
    
  ],
}

