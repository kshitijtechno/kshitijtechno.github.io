import { React, useState } from 'react';
import MyDialog from './MyDialog';
import { Button } from '@mui/material';
import hybris_message from './Learnings/hybris_message';

const MyIntro = () => {
    const [openIntro, setOpenIntro] = useState(false); 
    const handleClose = () => {
        setOpenIntro(false);
      };
      const openIntroModel = () => {
        setOpenIntro(true);
    };

  return (
    <div>
      <MyDialog
        open={openIntro}
        title={hybris_message.introText[0].textContent2}
        content={hybris_message.introText[0].textContent1}
        handleClose={handleClose}
        />
        <Button onClick={openIntroModel}>{hybris_message.introText[0].textContent2}</Button>
    </div>
  );
};

export default MyIntro;
