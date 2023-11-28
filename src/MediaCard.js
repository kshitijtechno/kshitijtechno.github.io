import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MediaCard({ title, content, cardStyle, cardTitleStyle }) {
  return (
    <Card sx={cardStyle}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={cardTitleStyle} dangerouslySetInnerHTML={{ __html: title }} />
        <Typography variant="body2" color="text.primary" dangerouslySetInnerHTML={{ __html: content }} />
      </CardContent>
    </Card>
  );
}
