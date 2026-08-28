"use client";

import { useEffect, useState } from "react";

const TIME_ZONE = "America/Los_Angeles";
const ADDRESS = "5501 SE Thiessen Rd, Portland, OR 97267";
const DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const programs = [
  { day: 3, dayName: "Wednesday", name: "Midweek Service", start: 18 * 60, end: 20 * 60, time: "6:00–8:00 PM" },
  { day: 5, dayName: "Friday", name: "Online Prayer Service", start: 20 * 60, end: 22 * 60, time: "8:00–10:00 PM" },
  { day: 0, dayName: "Sunday", name: "Morning Prayer", start: 9 * 60, end: 10 * 60, time: "9:00–10:00 AM" },
  { day: 0, dayName: "Sunday", name: "Sunday Worship Service", start: 10 * 60, end: 12 * 60 + 30, time: "10:00 AM–12:30 PM" },
  { day: 0, dayName: "Sunday", name: "Young Adult Service", start: 13 * 60 + 30, end: 15 * 60, time: "1:30–3:00 PM" },
];

const weekdayNumbers: Record<string, number> = {
  Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
};

function getPortlandTime(now: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);
  const value = (type: Intl.DateTimeFormatPartTypes) => Number(parts.find((part) => part.type === type)?.value);
  const weekday = parts.find((part) => part.type === "weekday")?.value ?? "Sun";
  return { weekday: weekdayNumbers[weekday], year: value("year"), month: value("month"), day: value("day"), minutes: value("hour") * 60 + value("minute") };
}

function getNextProgram(now: Date) {
  const local = getPortlandTime(now);
  const current = programs.find((program) => program.day === local.weekday && local.minutes >= program.start && local.minutes < program.end);
  if (current) return { ...current, daysAway: 0, live: true, date: "Happening now" };

  const candidates = programs.map((program) => {
    let daysAway = (program.day - local.weekday + 7) % 7;
    if (daysAway === 0 && program.start <= local.minutes) daysAway = 7;
    return { ...program, daysAway, minutesAway: daysAway * 1440 + program.start - local.minutes };
  }).sort((a, b) => a.minutesAway - b.minutesAway);

  const next = candidates[0];
  const calendarDate = new Date(Date.UTC(local.year, local.month - 1, local.day + next.daysAway));
  const date = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", timeZone: "UTC" }).format(calendarDate);
  return { ...next, live: false, date };
}

function distanceLabel(daysAway: number, live: boolean) {
  if (live) return "HAPPENING NOW";
  if (daysAway === 0) return "TODAY";
  if (daysAway === 1) return "TOMORROW";
  return `IN ${daysAway} DAYS`;
}

export default function WhatsHappening() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const next = now ? getNextProgram(now) : null;
  const specialEventVisible = !now || now.getTime() < new Date("2026-08-30T00:00:00-07:00").getTime();

  return (
    <section className="happening" id="visit" aria-labelledby="happening-title">
      <div className="happening-heading">
        <div>
          <p className="eyebrow dark">WHAT’S HAPPENING</p>
          <h2 id="happening-title">Come worship with us.</h2>
        </div>
        <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer">GET DIRECTIONS ↗</a>
      </div>

      <div className={`happening-featured ${specialEventVisible ? "" : "single"}`}>
        <article className="next-program">
          <div className="card-topline"><span>NEXT PROGRAM</span><b>{next ? distanceLabel(next.daysAway, next.live) : "UPDATING"}</b></div>
          <h3>{next?.name ?? "Weekly Church Program"}</h3>
          <p className="program-date">{next ? `${next.dayName}, ${next.date}` : "Checking the weekly schedule…"}</p>
          <p className="program-time">{next?.time ?? ""}</p>
          <p className="program-location">{next?.name === "Online Prayer Service" ? "Online" : ADDRESS}</p>
        </article>

        {specialEventVisible && <article className="special-event">
          <div className="card-topline"><span>SPECIAL EVENT</span><b>SATURDAY</b></div>
          <h3>Brothers’ Fellowship</h3>
          <p className="program-date">August 29 · Starts at 10:00 AM</p>
          <p className="program-location">{ADDRESS}</p>
          <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer">EVENT DIRECTIONS →</a>
        </article>}
      </div>

      <div className="weekly-programs">
        <div className="weekly-title"><span>REGULAR WEEKLY PROGRAMS</span><small>OREGON TIME</small></div>
        {programs.map((program) => <div className="weekly-item" key={program.name}>
          <span>{program.dayName}</span>
          <strong>{program.name}</strong>
          <small>{program.time}</small>
        </div>)}
      </div>
    </section>
  );
}
