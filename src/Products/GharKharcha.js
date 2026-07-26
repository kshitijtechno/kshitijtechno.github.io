import React, { useState, useRef } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  TextField,
  Chip,
} from '@mui/material';
import AndroidRoundedIcon from '@mui/icons-material/AndroidRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { Link } from 'react-router-dom';
import config from '../config';
import TrackPageAnalytics from '../TrackPageAnalytics';
import logo from '../images/gharkharcha/logo.png';

const features = [
  '🛒 Shared shopping list the whole family can add to and check off together',
  '💰 Expense tracking with rate, quantity, and who paid — plus PDF reports by day, month, or year',
  '🔁 Recurring items (milk, newspaper, subscriptions) with reminders, so nothing gets forgotten',
  '📸 Attach reference photos to a shopping item so the buyer gets the exact brand/packaging',
  '👨‍👩‍👧 Multi-member family accounts with a Head of Family role for approvals',
  '🔔 Activity feed so everyone can see what changed — items added, bought, or logged',
];

const GharKharcha = () => {
  const [showShareLink, setShowShareLink] = useState(false);
  const inputRef = useRef(null);

  const handleShareClick = () => {
    setShowShareLink(!showShareLink);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.select();
      }
    }, 100);
  };

  const shareUrl = window.location.href;

  return (
    <Container maxWidth="md" sx={{ pt: 12, pb: 6 }}>
      <TrackPageAnalytics pagename="GharKharcha" />
      <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
        📱 Our Products
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <Card raised sx={{ backgroundColor: '#f7f9fc', borderRadius: 3 }}>
            <CardContent>
              <Grid container spacing={2} alignItems="center" sx={{ mb: 1 }}>
                <Grid item>
                  <img
                    src={logo}
                    alt="GharKharcha logo"
                    style={{ width: 64, height: 64, borderRadius: 14 }}
                  />
                </Grid>
                <Grid item xs>
                  <Typography variant="h5">
                    GharKharcha App
                  </Typography>
                  <Chip label="Android APK — direct download" size="small" color="primary" variant="outlined" sx={{ mt: 0.5 }} />
                </Grid>
              </Grid>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                GharKharcha (घर खर्चा — "household expense") is a shared shopping list and expense
                tracker built for families. Everyone in the household stays on the same page:
                what to buy, what was bought, who paid, and where the money went.
              </Typography>

              <ul style={{ paddingLeft: '20px', marginBottom: '1rem' }}>
                {features.map(f => <li key={f}>{f}</li>)}
              </ul>
            </CardContent>

            <CardActions sx={{ justifyContent: 'center', flexWrap: 'wrap', gap: 2, pb: 1 }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AndroidRoundedIcon />}
                href="/assets/gharkharcha-1.0.0.apk"
                download
                size="large"
              >
                Download (1.0.0)
              </Button>

              <Button
                variant="outlined"
                color="secondary"
                startIcon={<LockRoundedIcon />}
                component={Link}
                to={config.uri_privacy_gharkharcha}
                size="large"
              >
                Privacy Policy
              </Button>

              <Button
                variant="outlined"
                color="secondary"
                startIcon={<ShareRoundedIcon />}
                onClick={handleShareClick}
                size="large"
              >
                Share
              </Button>
            </CardActions>

            <Typography variant="caption" color="text.secondary" align="center" sx={{ display: 'block', px: 2, pb: 2 }}>
              This is a direct APK, not from the Play Store — your phone may ask you to allow "install from unknown sources" the first time.
            </Typography>

            {showShareLink && (
              <Grid container justifyContent="center" sx={{ px: 2, pb: 3 }}>
                <TextField
                  fullWidth
                  inputRef={inputRef}
                  value={shareUrl}
                  variant="outlined"
                  InputProps={{ readOnly: true }}
                  onClick={() => inputRef.current.select()}
                />
              </Grid>
            )}
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GharKharcha;
