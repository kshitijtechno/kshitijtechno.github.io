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
} from '@mui/material';
import AndroidRoundedIcon from '@mui/icons-material/AndroidRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import login from '../images/dixnary/dixlogin.PNG';
import signup from '../images/dixnary/dixsignup.PNG';
import dix from '../images/dixnary/dix.PNG';

const screenshots = [
  { src: login, alt: 'Login Screen' },
  { src: signup, alt: 'Signup Screen' },
  { src: dix, alt: 'Dictionary Screen' },
];

const Dixnary = () => {
  const [showShareLink, setShowShareLink] = useState(false);
  const inputRef = useRef(null);

  const handleShareClick = () => {
    setShowShareLink(!showShareLink);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.select();
      }
    }, 100); // wait for input to render
  };

  const shareUrl = window.location.href;

  return (
    <Container maxWidth="md" sx={{ pt: 12, pb: 6 }}>
      <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
        📱 Our Products
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <Card raised sx={{ backgroundColor: '#f7f9fc', borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                📖 Dixnary App
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                Dixnary is a powerful, offline-first dictionary app that allows you to:
              </Typography>

              <ul style={{ paddingLeft: '20px', marginBottom: '1rem' }}>
                <li>🔍 Look up words with detailed meanings and examples</li>
                <li>🪄 Set secret magic words to unlock exclusive content</li>
              </ul>

              <Typography variant="body2" color="text.secondary">
                Currently available for Android. Install the APK directly using the button below!
              </Typography>

              <Grid container spacing={2} sx={{ mt: 3 }}>
                {screenshots.map(({ src, alt }, i) => (
                  <Grid item xs={12} sm={4} key={i}>
                    <img
                      src={src}
                      alt={alt}
                      style={{
                        width: '100%',
                        borderRadius: '10px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                      }}
                    />
                    <Typography
                      variant="caption"
                      align="center"
                      display="block"
                      sx={{ mt: 1 }}
                    >
                      {alt}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent>

            <CardActions
              sx={{ justifyContent: 'center', flexWrap: 'wrap', gap: 2, pb: 2 }}
            >
              <Button
                variant="contained"
                color="primary"
                startIcon={<AndroidRoundedIcon />}
                href="/assets/dixnary.apk"
                download
                target="_blank"
                size="large"
              >
                Download APP
              </Button>

              <Button
                variant="outlined"
                color="secondary"
                startIcon={<ShareRoundedIcon />}
                onClick={handleShareClick}
                size="large"
              >
                Share App
              </Button>
            </CardActions>

            {showShareLink && (
              <Grid container justifyContent="center" sx={{ px: 2, pb: 3 }}>
                <TextField
                  fullWidth
                  inputRef={inputRef}
                  value={shareUrl}
                  variant="outlined"
                  InputProps={{
                    readOnly: true,
                  }}
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

export default Dixnary;
