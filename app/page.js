import TopicList from "@/components/TopicList";


export default function Home() {
  return (
    <div className="px-12 py-4 flex flex-col gap-8">
      <TopicList/>
      <TopicList/>
      <TopicList/>
    </div>
  )
}
