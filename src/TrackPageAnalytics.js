import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';

const TrackPageAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname);
  }, [location]);

  return null;
}

export default TrackPageAnalytics;
