import React from "react";

const Character = props => {
  return (
    <div className="character">
      <li>
        <b>Name: </b>
        {props.character.name}
      </li>
      <li>
        <b>Gender: </b>
        {props.character.gender}
      </li>
      <li>
        <b>Height: </b>
        {props.character.height}
      </li>
      <li>
        <b>Hair Color: </b>
        {props.character.hair_color}
      </li>
    </div>
  );
};

export default Character;
