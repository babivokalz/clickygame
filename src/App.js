import React, { Component } from "react";
import GridMDC from "./components/GridMDC";
import PaperMDC from "./components/PaperMDC";
import CharacterCard from "./components/CharacterCard";
import Score from "./components/Score";
import Alert from "./components/Alert";
// import characters from "./characters.json";

class App extends Component {
  state = {
    characters: characters,
    pickedCharacters: [],
    topScore: 0,
    alertMessage: ""
  };

  handlePicked = event => {
    const name = event.target.attributes.getNamedItem("name").value;
    this.shuffleCharacters();
    this.checkGuess(name, this.updateTopScore);
  };

  shuffleCharacters = () => {
    this.setState(
      (this.state.characters = this.shuffleArray(this.state.characters))
    );
  };

  shuffleArray = a => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  checkGuess = (name, cb) => {
    const newState = { ...this.state };
    if (newState.pickedCharacters.includes(name)) {
      newState.alertMessage = `Sorry, you've already picked "${name.toUpperCase()}"!`;
      newState.pickedCharacters = [];
      this.setState((this.state = newState));
    } else {
      newState.pickedCharacters.push(name);
      newState.alertMessage = "Way to go!";
      this.setState((this.state = newState));
    }
    cb(newState, this.alertWinner);
  };

  updateTopScore = (newState, cb) => {
    if (newState.pickedCharacters.length > newState.topScore) {
      newState.topScore++;
      this.setState((this.state = newState));
    }
    cb(newState);
  };

  alertWinner = newState => {
    if (newState.pickedCharacters.length === 9) {
      newState.alertMessage = "We have a Winner!";
      newState.pickedCharacters = [];
      this.setState((this.state = newState));
    }
  };

  render() {
    return (
      <div>
        <GridMDC
          container
          direction="column"
          style={{ margin: "0 auto", maxWidth: 945 }}
        >
          <GridMDC item lg={12}>
            <PaperMDC>
              {this.state.alertMessage === "Excellent" ? (
                <Alert
                  message={this.state.alertMessage}
                  style={{ color: "purple" }}
                />
              ) : (
                <Alert
                  message={this.state.alertMessage}
                  style={{ color: "black" }}
                />
              )}
            </PaperMDC>
          </GridMDC>

          <GridMDC container justify="space-between">
            <GridMDC item lg={6} md={6} sm={12} xs={12}>
              <PaperMDC>
                <Score
                  type="Score"
                  score={this.state.pickedCharacters.length}
                />
              </PaperMDC>
            </GridMDC>

            <GridMDC item lg={6} md={6} sm={12} xs={12}>
              <PaperMDC>
                <Score type="Top Score" score={this.state.topScore} />
              </PaperMDC>
            </GridMDC>
          </GridMDC>
        </GridMDC>

        <GridMDC
          container
          spacing={24}
          justify="center"
          style={{ maxWidth: 945, margin: "0 auto" }}
        >
          {this.state.characters.map(char => (
            <GridMDC item lg={3} md={3} sm={4} xs={6}>
              <CharacterCard
                id={char.id}
                name={char.name}
                image={char.image}
                key={char.id}
                handlePicked={this.handlePicked}
              />
            </GridMDC>
          ))}
        </GridMDC>
      </div>
    );
  }
}

export default App;
