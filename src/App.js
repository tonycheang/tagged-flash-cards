import React from 'react';
import CardDisplay from './CardDisplay';
import UserInputDisplay from './UserInputDisplay';
import Button from './Button'

class Card {
  constructor(front, back) {
    this.front = front;
    this.back = back;
  }
}

class FlashCardApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.reportCorrectness = this.reportCorrectness.bind(this);
    this.readForm = this.readForm.bind(this);
    this.showAnswer = this.showAnswer.bind(this);
    this.resetInputAfterTyping = this.resetInput.bind(this, 500);
    this.resetInputAfterReveal = this.resetInput.bind(this, 0, true);

    this.defaultColor = "#888888"
    const phonetic = ['a', 'i', 'u', 'e', 'o',
      'ka', 'ki', 'ku', 'ke', 'ko',
      'sa', 'shi', 'su', 'se', 'so',
      'ta', 'chi', 'tsu', 'te', 'to',
      'na', 'ni', 'nu', 'ne', 'no',
      'ha', 'hi', 'fu', 'he', 'ho',
      'ma', 'mi', 'mu', 'me', 'mo',
      'ya', 'yu', 'yo',
      'ra', 'ri', 'ru', 're', 'ro',
      'wa', 'wo', 'n'
    ];
    const hirgana = ['あ', 'い', 'う', 'え', 'お',
      'か', 'き', 'く', 'け', 'こ',
      'さ', 'し', 'す', 'せ', 'そ',
      'た', 'ち', 'つ', 'て', 'と',
      'な', 'に', 'ぬ', 'ね', 'の',
      'は', 'ひ', 'ふ', 'へ', 'ほ',
      'ま', 'み', 'む', 'め', 'も',
      'や', 'ゆ', 'よ',
      'ら', 'り', 'る', 'れ', 'ろ',
      'わ', 'を', 'ん'
    ];
    this.cards = hirgana.map((char, i) => new Card(char, phonetic[i]));
    
    this.state = {
      currentCard: this.cards[Math.floor(this.cards.length * Math.random())],
      showFront: true,
      typed: "",
      textColor: "#000000",
      backgroundColor: this.defaultColor,
      firstTimeTyping: true
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleInput);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleInput);
  }

  handleInput(event) {
    if (this.state.firstTimeTyping)
      this.setState({ firstTimeTyping: false });

    if (event.key == "Enter" || event.key == " ") {
      if (this.state.justRevealed)
        this.resetInputAfterReveal();
      else
        this.showAnswer();
    }

    let curText = this.state.typed;
    let isLetter = /^\w$/;
    if (event.key === "Backspace") {
      if (curText.length > 0) {
        this.setState({ typed: curText.slice(0, curText.length - 1) })
      }
    } else if (isLetter.test(event.key)) {
      this.setState((state) => state.typed += event.key)
    } else {
      // Do not extend timer for input or report correctness
      return;
    }

    // Extend the timer to recognize input if it exists, otherwise make one
    if (this.state.typingTimer)
      clearTimeout(this.state.typingTimer);
    this.setState({ typingTimer: setTimeout(this.reportCorrectness, 300) });
  }

  readForm(event){
    // Temp holder while using window.addEventListener("keydown", this.handleInput);
    // console.log(event.target.value);
  }

  showAnswer(){
    if (this.state.firstTimeTyping)
      this.setState({ firstTimeTyping: false });

    this.setState({justRevealed: true, typed: this.state.currentCard.back})
  }

  reportCorrectness() {
    // Don't accept input if card gets revealed
    if (this.state.justRevealed)
      return;

    let answer = this.state.currentCard.back;
    let typed = this.state.typed.toLowerCase();

    // Don't report if the first few characters are correct
    if (typed.length < answer.length) {
      if (typed === answer.slice(0, typed.length))
        return
    }

    if (typed === this.state.currentCard.back) {
      this.setState({ backgroundColor: "#00BB00" });
      this.resetInputAfterTyping(true);
    } else {
      this.setState({ backgroundColor: "#BB0000" });
      this.resetInputAfterTyping(false);
    }
  }

  resetInput(time=0, nextCard){
    if (nextCard) {
      this.setState({
        currentCard: this.cards[Math.floor(this.cards.length * Math.random())],
        typed: ""
      })
    }
    setTimeout(() => this.setState({ backgroundColor: this.defaultColor }), time)
    this.setState({ typed: "", typingTimer: null , justRevealed: false});
  }

  render() {
    let card = this.state.currentCard;
    let displayData = this.state.showFront ? card.front : card.back;
    let defaultText = this.state.firstTimeTyping ? "type the phonetic translation" : "";
    let displayButton;
    if (this.state.justRevealed)
      displayButton = <Button text="continue" onClick={this.resetInputAfterReveal}></Button>;
    else
      displayButton = <Button text="show" onClick={this.showAnswer}></Button>

    return (
      <div align="center" style={{ backgroundColor: this.state.backgroundColor, margin: "10px", touchAction: "none" }}>
        
        <header style={{ fontSize: 20 }}>
          A Flash Card Mini-Game for Hiragana
        </header>

        <CardDisplay data={displayData}></CardDisplay>
        <UserInputDisplay data={this.state.typed}
          defaultText={defaultText}
          textColor={this.state.textColor}
          backgroundColor={this.state.backgroundColor}
          onChange={this.readForm}>
        </UserInputDisplay>
        <div>{displayButton}</div>

      </div>
    )
  };
}

export default FlashCardApp;
