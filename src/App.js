import React, { useEffect, useState } from 'react';

import Comments from './components/Comments';

import './index.scss';
import DB from './DB.json';

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(DB.data);
  }, []);

  const level = 0;

  return (
    <div className='app'>
      <div className='comments'>
        <Comments level={level + 1} comments={comments} />
      </div>
    </div>
  );
}

export default App;
