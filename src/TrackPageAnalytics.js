import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

const TrackPageAnalytics = ({pagename}) => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname , title: pagename });

  }, [pagename,location]);

  return null;
}

export default TrackPageAnalytics;
