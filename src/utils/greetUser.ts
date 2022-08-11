export enum Greetings {
  Morning = 'Morning',
  Afternoon = 'Afternoon',
  Evening = 'Evening',
  Night = 'Night',
}

export const greetUser = (now: Date): string => {
  const hours = now.getHours();
  if (hours >= 6 && hours < 12) {
    return Greetings.Morning;
  } else if (hours >= 12 && hours < 18) {
    return Greetings.Afternoon;
  } else if (hours >= 18 && hours < 22) {
    return Greetings.Evening;
  } else {
    return Greetings.Night;
  }
};
