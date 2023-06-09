import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <a className="button" href="https://firebasestorage.googleapis.com/v0/b/new-world-2ca64.appspot.com/o/%EC%83%88%EB%A1%9C%EC%9A%B4%20%EC%84%B8%EA%B3%84%20(1).zip?alt=media">맵 다운로드</a>
      </div>
    </main>
  )
}

