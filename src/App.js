import React, { useEffect, useState } from 'react';

import Comment from './components/Comment';

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
        <Comment level={level + 1} comments={comments} />
      </div>
    </div>
  );
}

export default App;
