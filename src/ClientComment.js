import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import MediaCard from './MediaCard';
import config from './config';

const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};


const ClientComment = () => {
    const [comments, setComments] = useState([]);

      useEffect(() => {
        const fetchComments = async () => {
          try {
            const csvLink = config.clientCommentDisplay;
    
            const response = await fetch(csvLink);
            const data = await response.text();
    
            const commentsData = [];
            let counter = 0;
            Papa.parse(data, {
              header: false,
              step: function (row) {
                const comment = {
                  Name: row.data[1],
                  Comment: row.data[2],
                };
                if(counter !== 0)
                {
                    commentsData.push(comment);
                }
                counter++;                
              },
              complete: function () {
                setComments(commentsData);
              },
              error: function (error) {
                console.error('Error parsing CSV:', error);
              },
            });
          } catch (error) {
            console.error('Error fetching comments:', error);
          }
        };
    
        fetchComments();
      }, []);
    
      if (comments.length === 0) {
        return null; 
      }
  return (
      <div>
    <center><h2>Customer comments</h2></center>
        <div className="comment-container"> 
            <ul className="comment-list">
                {comments.map((comment, index) => (
                    <li key={index} className="comment-item">
                        <MediaCard
                            title={comment.Name}
                            content={`"${comment.Comment}"`}
                            cardStyle={{ maxWidth: '100%', backgroundColor: getRandomColor(), textAlign:'center' }}
                            />
                    </li>
                ))}
            </ul>
          </div>
          </div>);
};

export default ClientComment;
