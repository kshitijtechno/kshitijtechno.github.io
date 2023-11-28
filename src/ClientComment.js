import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import MediaCard from './MediaCard';
import config from './config';



const ClientComment = () => {
    const [comments, setComments] = useState([]);

      useEffect(() => {
        const fetchComments = async () => {
          try {
            const csvLink = config.clientCommentDisplay;
              //'https://docs.google.com/spreadsheets/d/e/2PACX-1vTd1pmnxR9m5aMyIVQ5uaIWY9OXW2T3zf4eszQLDVvlfslmGqhV3yKlHtHI_2HRc1P7x5Vy5U9ZgFYM/pub?gid=508978835&single=true&output=csv';
    
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
                            cardStyle={{ maxWidth: '100%', backgroundColor: '#1CB5E0', textAlign:'center' }}
                            />
                    </li>
                ))}
            </ul>
          </div>
          </div>);
};

export default ClientComment;
