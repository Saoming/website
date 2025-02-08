import { useState, useEffect } from 'react';

export default function Clock() {
  const [hoChiMinhTime, setHoChiMinhTime] = useState(getFormattedTime('Asia/Ho_Chi_Minh'));
  const [localTime, setLocalTime] = useState(getFormattedTime());
  const [colonOpacity, setColonOpacity] = useState(1);

  function getFormattedTime(timeZone = undefined) {
    const now = new Date();
    const options = {
      timeZone,
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };

    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(now);

    const hours = parts.find((p) => p.type === 'hour').value;
    const minutes = parts.find((p) => p.type === 'minute').value;
    const seconds = parts.find((p) => p.type === 'second').value;
    const period = parts.find((p) => p.type === 'dayPeriod').value.toUpperCase();

    const timeZoneName = timeZone
      ? new Intl.DateTimeFormat('en-US', { timeZone, timeZoneName: 'short' })
          .formatToParts(now)
          .find((p) => p.type === 'timeZoneName').value
      : Intl.DateTimeFormat().resolvedOptions().timeZone;

    return { hours, minutes, seconds, period, timeZoneName };
  }

  useEffect(() => {
    function updateTime() {
      setHoChiMinhTime(getFormattedTime('Asia/Ho_Chi_Minh'));
      setLocalTime(getFormattedTime());
    }

    const timeInterval = setInterval(updateTime, 1000);
    const fadeInterval = setInterval(() => {
      setColonOpacity((prev) => (prev === 1 ? 0 : 1));
    }, 500);

    return () => {
      clearInterval(timeInterval);
      clearInterval(fadeInterval);
    };
  }, []);

  function renderClock(time) {
    return (
      <time className="text-white current-time">
        {time.hours}
        <span
          style={{
            opacity: colonOpacity,
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          :
        </span>
        {time.minutes}
        <span
          style={{
            opacity: colonOpacity,
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          :
        </span>
        {time.seconds} 
        <span>
        {time.period} {time.timeZoneName}
        </span>
      </time>
    );
  }

  return (
    <div className="pt-[1rem] flow">
      <div>
        {renderClock(hoChiMinhTime)}
      </div>

      {/* <div>
        <h4>Your Local Time:</h4>
        {renderClock(localTime)}
      </div> */}
    </div>
  );
}