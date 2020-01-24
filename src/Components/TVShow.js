import React from 'react';

const tvShow = (props) => {
  let {show} = props
  return (
    <div>
      <br/>
      <img src={show.image.medium} onClick={show.selectShow} alt=""/>
    </div>
  );
}

export default tvShow;
