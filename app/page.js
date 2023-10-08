import TopicList from "@/components/TopicList";


export default function Home() {
  return (
    <div className="px-2 py-4 flex flex-col gap-8">
      <TopicList id={1}/>
      <TopicList id={2}/>
      <TopicList id={3}/>
    </div>
  )
}
