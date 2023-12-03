import { Container, Paper } from '@mui/material';
import config from './config';
import MediaCard from './MediaCard';

const Blog = () => {
    return (
        <div>
            <Container maxWidth="lg" sx={{ marginTop: 4 }}>        
              <Paper elevation={2} sx={{ padding: 3, borderRadius: 4 }}>
              <MediaCard
                content="SAP Commerce cloud interview questions"
                cardStyle={{ maxWidth: '100%', backgroundColor: '#1CB5E0', textAlign:'center' }}
                />
              {config.blog_questionAnswer.map((data, index) => (
                  <div key={index}>
                    <h3>{index}) {data.question}</h3>
                    <p dangerouslySetInnerHTML={{ __html: data.answer }}></p>
                  </div>            
                ))}
              </Paper>
            </Container>
        </div>
    );
}

export default Blog;