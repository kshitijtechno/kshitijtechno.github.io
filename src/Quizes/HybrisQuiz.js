import { Container, Paper, Grid } from '@mui/material';
import TrackPageAnalytics from '../TrackPageAnalytics';
import LeftMenuQuizes from '../Quizes/LeftMenuQuizes';
import MediaCard from '../MediaCard';

const HybrisQuiz = () => {
    return (
        <div id="hybris-quiz">
        <TrackPageAnalytics pagename="HybrisQuiz"/>
        <Container maxWidth="xl" sx={{ marginTop: 4 }}>          
            <Paper elevation={2} sx={{ padding: 3, borderRadius: 4 }}>
            <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <LeftMenuQuizes/>
                    </Grid>          
                    <Grid item xs={8}>
                        <MediaCard
                            content="Hybris Quiz"
                            cardStyle={{ maxWidth: '100%', backgroundColor: '#1CB5E0', textAlign:'center' }}
                            />
                    </Grid>
                </Grid>
            </Paper>
            </Container>
        </div>
    
    );
}
export default HybrisQuiz;