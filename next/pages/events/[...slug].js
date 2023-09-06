import { useRouter } from "next/router";
import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/events/event-list";
import { Fragment } from "react";
import ResultsTitle from "@/components/events/results-title/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert/error-alert";

export default function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filterdYear = filterData[0];
  const filteredMonth = filterData[1];

  //to get numbers from strings (data)
  const numYear = +filterdYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <Fragment>
        <ErrorAlert>
        <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div>
            <Button link='/ events'>Show All Events</Button>
        </div>
    </Fragment>;
  }

  const filterEvents = getFeaturedEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filterEvents || filterEvents.length === 0) {
    return <Fragment>
        <ErrorAlert>
        <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
        <Button link='/events'>Show All Events</Button>
        </div>
        </Fragment>;
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
        <ResultsTitle date={date}/>
      <EventList items={filterEvents} />
    </Fragment>
  );
}
