var angleClock = function (hour, minutes) {
  if (hour === 12) {
    hour = 0;
  }

  let minutesAngle = minutes * 6;
  let hourAngle = hour * 30 + minutes / 2;

  return Math.min(
    Math.abs(minutesAngle - hourAngle),
    360 - Math.abs(minutesAngle - hourAngle)
  );
};
