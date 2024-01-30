/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bleuvba: '#a1c4eb',
        orangevba: '#e99714',
      },
      backgroundImage: {
        'image2': 'https://cdn.discordapp.com/attachments/878674914268311625/1194638574419714140/WhatsApp_Image_2024-01-08_a_22.23.49_e686fb24.jpg?ex=65b114df&is=659e9fdf&hm=8f5042ac31e90055fea4d97b9fa2496471da7effe4a0cef06b76d43785ff5d92',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
