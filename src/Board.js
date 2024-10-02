import './Board.css';

const Board = () => {
  return (
    <div className='board'>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div>
          <div className='top-left-corner'></div>
        </div>
        <div>
          <div className='top-right-corner'></div>
        </div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div>
          <div className='left-corner'></div>
        </div>
        <div>
          <div className='right-corner'></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Board;