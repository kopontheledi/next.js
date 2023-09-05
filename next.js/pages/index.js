import { getFeaturedEvents } from "@/dummy-data"

export default function HomePage() {
 const featureEvents = getFeaturedEvents();
 
  return ( 
  <div>
    <h1>The Home Page</h1>
  </div>
  ) 
}