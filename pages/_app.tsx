import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'; // TailwindCSS 의 CSS 규칙들을 앱 전역에 적용합니다.

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-50 w-full min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}
