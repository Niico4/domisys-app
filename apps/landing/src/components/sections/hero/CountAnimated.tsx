import CountUp from 'react-countup';

interface CountAnimatedProps {
  value: number;
  duration: number;
  start?: number;
}

const CountAnimated = ({
  value,
  start = 0,
  duration = 2,
}: CountAnimatedProps) => {
  return <CountUp end={value} start={start} duration={duration} />;
};

export default CountAnimated;
