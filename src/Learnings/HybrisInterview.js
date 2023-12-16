import * as React from 'react';
import MediaCard from '../MediaCard';
import config from '../config';
import CodeSnippet from '../CodeSnippet';



function HybrisInterview() {
  return (
    <div id="hybris-interview">
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
                </div>
  );
}
export default HybrisInterview;