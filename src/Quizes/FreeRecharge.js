import { Container, Paper, Grid, Dialog, DialogContent, IconButton } from '@mui/material';
import { useState } from 'react';
import TrackPageAnalytics from '../TrackPageAnalytics';
import successImage from '../images/freeRecharge/april-fool.jpg'; // Import your success image here
import ShareIcon from '@mui/icons-material/Share'; // Import Share icon from MUI

const FreeRecharge = () => {
    const [circle1Color, setCircle1Color] = useState('grey');
    const [circle2Color, setCircle2Color] = useState('grey');
    const [circle3Color, setCircle3Color] = useState('grey');
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [nameError, setNameError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [showSuccessImage, setShowSuccessImage] = useState(false);
    const [showShareDialog, setShowShareDialog] = useState(false);

    const handleChangeName = (event) => {
        setName(event.target.value);
        setNameError('');
    };

    const handleChangeMobileNumber = (event) => {
        setMobileNumber(event.target.value);
        setMobileError('');
    };

    const handleClickCircle1 = () => {
        setCircle1Color('green');
    };

    const handleClickCircle2 = () => {
        setCircle2Color('green');
    };

    const handleClickCircle3 = () => {
        setCircle3Color('green');
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Validation checks
        if (circle1Color !== 'green' || circle2Color !== 'green' || circle3Color !== 'green') {
            alert('Please click on all images');
            return;
        }

        if (!name.trim()) {
            setNameError('Name is required');
            return;
        }

        if (!/^\d{10}$/.test(mobileNumber)) {
            setMobileError('Mobile number should be a 10-digit number');
            return;
        }

        try {
            const response = await fetch('https://formspree.io/f/xqkrygzd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, mobileNumber })
            });

            if (response.ok) {
                console.log('Form submitted successfully');
                // Clear input fields after successful submission
                setName('');
                setMobileNumber('');
                setShowSuccessImage(true); // Show the success image
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const openShareDialog = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Check out this page!',
                text: 'Get free recharge of 2000 and many more gifts.',
                url: window.location.href
            })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
        } else {
            setShowShareDialog(true);
        }
    };

    const closeShareDialog = () => {
        setShowShareDialog(false);
    };

    return (
        <div id="free-recharge">
            <TrackPageAnalytics pagename="FreeRecharge"/>
            <Container maxWidth="xl" sx={{ marginTop: 4 }}>          
                <Paper elevation={2} sx={{ padding: 3, borderRadius: 4 }}>
                    <Grid container spacing={2} bgcolor="pink">                
                        <Grid item xs={12} >
                            <p style={{ fontSize: '50px', fontWeight: 'bold' }}>Get free recharge of 2000 and many more gifts.</p>
                            <p style={{ fontSize: '25px' }}>Click below images.</p>                
                        </Grid>
                        <Grid item xs={4} style={{ textAlign: 'center' }} >
                            <div
                                className="circle"
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    backgroundColor: circle1Color,
                                    borderRadius: '50%',
                                    border: '2px solid black',
                                    margin: 'auto',
                                    marginTop: '20px',
                                }}
                                onClick={handleClickCircle1}
                            ></div>
                        </Grid>
                        <Grid item xs={4} style={{ textAlign: 'center' }}>
                            <div
                                className="circle"
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    backgroundColor: circle2Color,
                                    borderRadius: '50%',
                                    border: '2px solid black',
                                    margin: 'auto',
                                    marginTop: '20px',
                                }}
                                onClick={handleClickCircle2}
                            ></div>
                        </Grid>
                        <Grid item xs={4} style={{ textAlign: 'center' }}>
                            <div
                                className="circle"
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    backgroundColor: circle3Color,
                                    borderRadius: '50%',
                                    border: '2px solid black',
                                    margin: 'auto',
                                    marginTop: '20px',
                                }}
                                onClick={handleClickCircle3}
                            ></div>
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            {showSuccessImage ? (
                                <img src={successImage} alt="Success" style={{ width: '100%', height: 'auto' }} />
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div><input type="text" id="name" name="name" value={name} onChange={handleChangeName} placeholder="Name"/></div>
                                    <div>{nameError && <span style={{ color: 'red' }}>{nameError}</span>}<br /></div> 
                                    <div><input type="tel" id="mobile" name="mobile" value={mobileNumber} onChange={handleChangeMobileNumber} placeholder="Mobile" /></div>
                                    <div>{mobileError && <span style={{ color: 'red' }}>{mobileError}</span>}<br /></div>
                                    <button type="submit">Submit</button>
                                </form>
                            )}
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <IconButton onClick={openShareDialog}> {/* IconButton for sharing */}
                                <ShareIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
            <Dialog open={showShareDialog} onClose={closeShareDialog}> {/* Dialog component for sharing */}
                <DialogContent>
                    <p>Please share this link:</p>
                    <p>{window.location.href}</p>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default FreeRecharge;
