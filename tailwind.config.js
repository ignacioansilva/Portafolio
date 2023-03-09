/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
          "diagonal-section": "url('/src/imagenes/GraffitiSection.jpg')",
          "form-graffiti": "url('/src/imagenes/FormGraf.jpg')",
          "footer-graffiti": "url('/src/imagenes/FooterGraf.jpg')"
        },
      },
  },
  plugins: [],
}
