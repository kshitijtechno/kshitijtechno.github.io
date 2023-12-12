import { Container, Paper } from '@mui/material';
import config from './config';
import MediaCard from './MediaCard';
import TrackPageAnalytics from './TrackPageAnalytics';
import CodeSnippet from './CodeSnippet';


const Blog = () => {
    return (
        <div>
          <TrackPageAnalytics pagename="Blog"/>
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
                    {data.code && (
                      <CodeSnippet language="javascript" code={data.code} />
                    )}
                  </div>            
                ))}
                {/* <div>
                <CodeSnippet language="javascript" code={exampleCode} />
                </div> */}
                
              </Paper>
            </Container>
        </div>
    );
}

export default Blog;