exports.localTime = () => {
  // Create a new date in UTC+6 by adding offset in milliseconds
  const offsetHours = 6;
  const now = new Date();
  const utcTime = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
  const localTime = new Date(utcTime + offsetHours * 60 * 60 * 1000);

  let hours = localTime.getHours();
  let minutes = localTime.getMinutes();
  let seconds = localTime.getSeconds();
  let day = localTime.getDate();
  let month = localTime.getMonth() + 1;
  const year = localTime.getFullYear();

  // AM/PM
  let ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  if (hours > 12) hours -= 12;
  if (hours === 0) hours = 12;

  // Pad with leading zeros
  const pad = (n) => (n < 10 ? "0" + n : n);
  hours = pad(hours);
  minutes = pad(minutes);
  seconds = pad(seconds);
  day = pad(day);
  month = pad(month);

  const dateObject = {
    date: `${year}-${month}-${day}`,
    time: localTime.toTimeString(), // 24-hour with GMT offset
    formatedTime: `${hours}:${minutes}:${seconds} ${ampm}`,
  };

  return dateObject;
};
