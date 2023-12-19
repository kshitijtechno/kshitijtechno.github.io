import { Container, Paper, Grid } from '@mui/material';
import { useState } from 'react';
import TrackPageAnalytics from '../TrackPageAnalytics';
import LeftMenuQuizes from '../Quizes/LeftMenuQuizes';
import MediaCard from '../MediaCard';
import config from '../Learnings/hybris_message';
import Button from '@mui/material/Button';

import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded';


const HybrisQuiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null); 
    const options = ["A.", "B.","C.", "D.", "E.", "F.", "G."];

    const getNextQuestion = () => {
        setIsCorrect(null);
        setCurrentQuestion(currentQuestion+1);
    };
    const getPrevQuestion = () => {
        setIsCorrect(null);
        setCurrentQuestion(currentQuestion-1);        
    };
    const resetQuiz = () => {
        setIsCorrect(null);
        setCurrentQuestion(0);        
    };
    const showResult = (currentQuestion, data) => {
        if(config.hybrisQuiz1[currentQuestion].correctAnswer === data){
            setIsCorrect(true);
        }
        else{
            setIsCorrect(false);
        }
    };

    return (
        <div id="hybris-quiz">
        <TrackPageAnalytics pagename="HybrisQuiz"/>
        <Container maxWidth="xl" sx={{ marginTop: 4 }}>          
            <Paper elevation={2} sx={{ padding: 3, borderRadius: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <LeftMenuQuizes />
                </Grid>
                <Grid item xs={8}>
                    <MediaCard
                    content="Hybris Quiz"
                    cardStyle={{ maxWidth: '100%', backgroundColor: '#1CB5E0', textAlign: 'center' }}
                    />
                    
                        <h3>{currentQuestion + 1}. {config.hybrisQuiz1[currentQuestion].question}</h3>
                    <Grid container spacing={2}>
                    <Grid item xs={6}>
                        {config.hybrisQuiz1[currentQuestion].answers.map((data, index) => (
                        <div id={index + 1} key={index + 1}>
                            {options[index]}&nbsp;&nbsp;<Button variant="outlined" style={{ maxWidth: '50%', textTransform: 'none' }} onClick={() => showResult(currentQuestion, data)}>{data}</Button>
                            <br />
                            <br />
                        </div>
                        ))}
                    </Grid>
                    <Grid item xs={6}>
                    {isCorrect !== null && (
                        <div>
                            {isCorrect ? (
                                <div>
                                    <ThumbUpAltRoundedIcon color="success"/>&nbsp;
                                    Correct!
                                    <hr />
                                    <b>{config.hybrisQuiz1[currentQuestion].correctAnswer}</b><br />
                                    {config.hybrisQuiz1[currentQuestion].explaination}
                                </div>
                            ) : (
                                <div>
                                    <ThumbDownAltRoundedIcon color="error"/>&nbsp;
                                    Incorrect!
                                    <hr />
                                    <b>{config.hybrisQuiz1[currentQuestion].correctAnswer}</b><br />
                                    {config.hybrisQuiz1[currentQuestion].explaination}
                                </div>
                            )}
                        </div>
                    )}
                    </Grid>
                    </Grid>
                    <Button variant="contained" onClick={getPrevQuestion} disabled={currentQuestion === 0} color="secondary">Previous</Button>&nbsp;&nbsp;
                    <Button variant="contained" onClick={getNextQuestion} disabled={currentQuestion === config.hybrisQuiz1.length - 1} color="success">Next</Button>&nbsp;&nbsp;
                    <Button variant="contained" onClick={resetQuiz} color="error">Reset</Button>
                </Grid>
            </Grid>

            </Paper>
            </Container>
        </div>
    
    );
}
export default HybrisQuiz;