// tailwind.config.js
module.exports = {
  content: [
    // Paths to your files should go here.
    // Use glob patterns to include all relevant files, for example:
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust this according to your project's folder structure
    // Add any other paths that contain Tailwind class names.
  ],
  theme: {
    extend: {
      fontFamily: {
        'agbalumo': ['Agbalumo', 'cursive'],
        'comfortaa': ['Comfortaa', 'cursive'],
        'pixelify': ['Pixelify Sans', 'cursive'],
        'prata': ['Prata', 'serif'],
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(-50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideTop: {
          '0%': { transform: 'translateY(-50%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-left': 'slideLeft 2s ease-in-out forwards',
        'slide-top': 'slideTop 2s ease-in-out forwards'
      },
    },
  },
  plugins: [],
}
