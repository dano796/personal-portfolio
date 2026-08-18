import { useEffect, useState } from "react";
import { LOCATION } from "../constants";

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: LOCATION.timeZone,
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

// Open-Meteo is free and keyless, which matters here: this is a static bundle,
// so any API key would ship to the browser in plain text.
const WEATHER_URL =
  `https://api.open-meteo.com/v1/forecast` +
  `?latitude=${LOCATION.latitude}&longitude=${LOCATION.longitude}` +
  `&current=temperature_2m`;

const REFRESH_MS = 10 * 60 * 1000;

const msUntilNextMinute = () => 60_000 - (Date.now() % 60_000);

/** Local time and temperature in Medellín, shown at the right of the navbar. */
const LocalStatus: React.FC = () => {
  const [time, setTime] = useState(() => timeFormatter.format(new Date()));
  const [temperature, setTemperature] = useState<number | null>(null);

  // Align to the minute boundary so the clock flips when the minute actually
  // changes, rather than 60s after whenever the component mounted.
  useEffect(() => {
    let timeout = window.setTimeout(function tick() {
      setTime(timeFormatter.format(new Date()));
      timeout = window.setTimeout(tick, msUntilNextMinute());
    }, msUntilNextMinute());

    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        const response = await fetch(WEATHER_URL, { signal: controller.signal });
        if (!response.ok) return;

        const value = (await response.json())?.current?.temperature_2m;
        if (typeof value === "number") setTemperature(Math.round(value));
      } catch {
        // Offline, blocked or rate limited: fall back to showing time alone.
      }
    };

    load();
    const interval = window.setInterval(load, REFRESH_MS);

    return () => {
      controller.abort();
      window.clearInterval(interval);
    };
  }, []);

  return (
    <span
      // The min-width reserves the temperature's slot so the navbar does not
      // shift sideways when the fetch resolves. It shrinks on mobile, where the
      // four nav links plus this readout only just fit on one line.
      className="min-w-[6rem] shrink-0 text-right text-[0.8125rem] tabular-nums text-gray-500 sm:min-w-[6.5rem] sm:text-sm"
      title="local time and temperature in Medellín"
    >
      {time}
      {temperature !== null && ` · ${temperature}°C`}
    </span>
  );
};

export default LocalStatus;
