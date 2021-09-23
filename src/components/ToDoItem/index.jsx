import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faUndoAlt } from '@fortawesome/free-solid-svg-icons'

const ToDoItem = ({ children, completed = false, toggleTaskStatus }) => {
  const itemBaseClass = `w-full my-2 p-2 rounded flex items-center justify-between`;
  const itemClass = itemBaseClass.concat(` ${completed ? 'bg-green-300' : 'bg-red-300'}`);

  return (
    <div className={itemClass}>
      <span className="w-10/12">
        {children}
      </span>

      <div className="flex items-center justify-around w-2/12 h-full">
        <div className="cursor-pointer p-1" onClick={toggleTaskStatus}>
          <FontAwesomeIcon icon={completed ? faUndoAlt : faCheck} />
        </div>
      </div>
    </div>
  )
};

export default ToDoItem;