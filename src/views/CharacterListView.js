import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import Loader from "react-loader-spinner";
import { getChar } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getChar();
  }

  render() {
    if (this.props.isLoading) {
      // return something here to indicate that you are fetching data
      return (
        <div>
          <Loader type="Puff" color="#000" height="200" width="200" />
          <h2>LOADING DEATH STAR BLUEPRINT...</h2>
        </div>
      );
    }
    return (
      <div className="CharactersList_wrapper">
        <h1>Star Wars Characters</h1>
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  console.log(state);
  return {
    isLoading: state.charsReducer.isLoading,
    characters: state.charsReducer.characters,
    error: state.charsReducer.error
  };
};

export default connect(
  mapStateToProps,
  { getChar }
)(CharacterListView);
