import { getFeaturedEvents } from "@/helpers/api-util";
import EventList from "@/components/events/event-list";

//loading of the starting page using getStaticProps 
export default function HomePage(props) {

  return ( 
  <div>
    <EventList items={props.events}/>
  </div>
  ) ;
}
 
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()

  return{
    props:{
      events: featuredEvents
    },
    revalidate: 1800
  }
}