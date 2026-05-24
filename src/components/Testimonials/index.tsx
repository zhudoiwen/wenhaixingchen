"use client"

import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import SectionTitle from "../Common/SectionTitle"
import { useState } from "react"

const reviews = [
  {
    name: "李总",
    username: "@文海星辰",
    body: "武汉硚口的宠物店，做了同城GEO优化后，客户搜「附近宠物美容」，我们排在前面，新客翻了一倍！",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "王总",
    username: "@文海星辰",
    body: "在武汉汉阳开工作室，原来本地客户根本找不到我们，优化后不管是搜地图还是问AI，都能看到我们，客源稳定多了。",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "翁姐",
    username: "@文海星辰",
    body: "武汉汉阳做家装的，以前客户找装修只看地图，现在问AI的人越来越多，优化后不管搜地图还是问AI，都能找到我们，客源稳定多了",
    img: "https://avatar.vercel.sh/john",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)
const thirdRow = reviews.slice(0, reviews.length / 2)
const fourthRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
  onPause,
  onResume,
}: {
  img: string
  name: string
  username: string
  body: string
  onPause?: () => void
  onResume?: () => void
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-36",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
      onMouseEnter={onPause}
      onMouseLeave={onResume}
      onTouchStart={onPause}
      onTouchEnd={onResume}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

function Marquee3D() {
  const [isPaused, setIsPaused] = useState(false)

  const handlePause = () => setIsPaused(true)
  const handleResume = () => setIsPaused(false)

  return (
    <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden bg-transparent [perspective:300px]">
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
        }}
      >
        <Marquee paused={isPaused} vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} onPause={handlePause} onResume={handleResume} />
          ))}
        </Marquee>
        <Marquee reverse paused={isPaused} className="[--duration:20s]" vertical>
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} onPause={handlePause} onResume={handleResume} />
          ))}
        </Marquee>
        <Marquee reverse paused={isPaused} className="[--duration:20s]" vertical>
          {thirdRow.map((review) => (
            <ReviewCard key={review.username} {...review} onPause={handlePause} onResume={handleResume} />
          ))}
        </Marquee>
        <Marquee paused={isPaused} className="[--duration:20s]" vertical>
          {fourthRow.map((review) => (
            <ReviewCard key={review.username} {...review} onPause={handlePause} onResume={handleResume} />
          ))}
        </Marquee>
      </div>

      <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"></div>
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}

const Testimonials = () => {
  return (
    <>
      <SectionTitle
        title="生成式引擎优化.GEO"
        paragraph="现在用户更习惯在AI中提问，我们的内容会被优先推荐。"
        center
      />
      <Marquee3D />
    </>
  )
}

export default Testimonials
