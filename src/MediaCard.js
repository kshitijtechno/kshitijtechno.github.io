import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MediaCard({ title, content, maxWidth}) {
  return (
    <Card sx={{ maxWidth: {maxWidth} }}>
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" sx={{ backgroundColor: '#4ac0e3' }}>
          {title}
          
        </Typography>
        <Typography variant="body2" color="text.primary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}