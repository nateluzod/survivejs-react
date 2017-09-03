import React from 'react';
import uuid from 'uuid';
import connect from '../libs/connect';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';

const App = ({LaneActions, lanes}) => {
  const addLane = () => {
    LaneActions.create({
      id: uuid.v4(),
      name: 'Click to edit name'
    });
  };

  return (
    <div>
      <button className="add-lane" onClick={addLane}>Create a lane</button>
      <Lanes lanes={lanes} />
    </div>
  );
};

export default connect(({lanes}) => ({
  lanes
}), {
  LaneActions
})(App)