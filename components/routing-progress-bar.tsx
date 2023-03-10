import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import randomIntFromInterval from '../lib/random-int-from-interval';
import routingProgressBarStyles from '../styles/routing-progress-bar.module.css';

export default function RoutingProgressBar() {
  const router = useRouter();
  const [percent, setPercent] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let randomPercents: number[] = [
      randomIntFromInterval(40, 60),
      randomIntFromInterval(70, 85),
    ];

    const handleRouteChangeStart = () => {
      setPercent(() => randomPercents[0]);

      setTimeout(() => {
        randomPercents[1] && setPercent(() => randomPercents[1]);
      }, 1000);
    };

    const handleRouteChangeComplete = () => {
      randomPercents = [];

      setPercent(() => 100);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  });

  return (
    <div
      className={routingProgressBarStyles.progressBar}
      style={{
        width: percent + '%',
      }}
    >
      <div ref={barRef}></div>
    </div>
  );
}
