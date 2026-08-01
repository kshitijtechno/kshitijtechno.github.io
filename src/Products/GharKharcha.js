import React, { useState, useRef, useEffect } from 'react';
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

// Same Supabase project the app itself talks to — this is the public anon key, safe to embed
// client-side (same as it already is inside the app's own JS bundle). Reading it directly via
// fetch avoids pulling the @supabase/supabase-js package into this site just for one read.
const SUPABASE_URL = 'https://jebemcbwjlwepwrokvdy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplYmVtY2J3amx3ZXB3cm9rdmR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIwNTA4ODcsImV4cCI6MjA5NzYyNjg4N30.SJkNIbryFAIQWT-7SMKBaAgz4b2Bfuy6TMaV8LBsKnA';

// Fallback shown only until the fetch resolves (or if it ever fails) — kept in sync manually
// as a last resort, but the `app_releases` row (edited from the Supabase dashboard whenever a
// new build is cut) is the real source of truth once it loads. This is the same table the app
// itself checks on launch to decide whether to block/nag a user onto a newer version — one
// place to update per release, instead of this file too.
const FALLBACK_VERSION = '1.0.0';
const FALLBACK_APK_URL = '/assets/gharkharcha-1.0.0.apk';

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
  const [release, setRelease] = useState(null);

  useEffect(() => {
    fetch(`${SUPABASE_URL}/rest/v1/app_releases?platform=eq.android&select=latest_version,download_url,release_notes`, {
      headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
    })
      .then(res => res.json())
      .then(rows => { if (Array.isArray(rows) && rows[0]) setRelease(rows[0]); })
      .catch(() => {}); // silently keep the fallback constants above
  }, []);

  const displayVersion = release?.latest_version || FALLBACK_VERSION;
  const apkUrl = release?.download_url || FALLBACK_APK_URL;

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
                href={apkUrl}
                download
                size="large"
              >
                Download ({displayVersion})
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

            <Typography variant="caption" color="text.secondary" align="center" sx={{ display: 'block', px: 2, pb: release?.release_notes ? 1 : 2 }}>
              This is a direct APK, not from the Play Store — your phone may ask you to allow "install from unknown sources" the first time.
            </Typography>

            {!!release?.release_notes && (
              <Typography variant="body2" color="text.secondary" align="center" sx={{ display: 'block', px: 2, pb: 2, fontStyle: 'italic' }}>
                What's new in {displayVersion}: {release.release_notes}
              </Typography>
            )}

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
