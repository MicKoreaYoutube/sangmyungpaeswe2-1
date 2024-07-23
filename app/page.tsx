import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import { Ban } from "lucide-react"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 my-28 max-w-[1000px] text-center h-[60vh]">
      <div className="flex flex-col gap-2 items-center">
        <Ban className="text-red-500" size={400}/>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tighter font-KBO-Dia-Gothic_bold">
          상명중 1학년 1반 건의함은 <br />2024년 2월 6일부로 폐쇄되었습니다.
        </h1>
        <p className="text-lg md:text-2xl text-muted-foreground font-SUITE-Regular">
          이용해주셔서 감사합니다.
        </p>
      </div>
    </section>
  )
}
