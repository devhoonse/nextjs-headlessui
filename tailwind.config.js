/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [ // 여기 명시된 파일들에서 사용되지 않은 TailwindCSS 규칙들은 모두 제거합니다.
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  darkMode: 'class', // <html> 요소의 클래스를 보고 컴포넌트에 Light/Dark 무엇을 적용할지 결정합니다.
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
