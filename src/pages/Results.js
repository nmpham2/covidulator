import React from 'react';
import './Results.css';
import { results, questions } from '../data.js';
import Quarter from '../assets/quarter.png';
import { Button, Container, Row, Col } from 'react-bootstrap';

import { useHistory } from "react-router-dom";

function Results(props) {
  const history = useHistory();
  const [letterIndex, setLetterIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [quarter, setQuarter] = React.useState(0);
  const quarters = new Array(quarter).fill();

  React.useEffect(() => {
    calculateScore();
  })

  const calculateScore = () => {
    let totalScore = 0;
    props.score.forEach((e, index) => {
      totalScore += questions[index].answers[e].points;
    })
    totalScore /= 180;
    totalScore *= 100;

    if (totalScore >= 90) {
      setLetterIndex(0);
      setQuarter(2);
    } else if (totalScore >= 80) {
      setLetterIndex(1); 
      setQuarter(3);
    } else if (totalScore >= 70){
      setLetterIndex(2);
      setQuarter(4);
    } else if (totalScore >= 60) {
      setLetterIndex(3);
      setQuarter(5);
    } else {
      setLetterIndex(4);
      setQuarter(6);
    }

    setScore(totalScore.toFixed(0));
  }

  function goToHome(){
    history.push('/');
  }
  
  return (
    <div className="results">
      <h2 className="results-title">RESULTS</h2>
      <div className="score-info">
        <h5 className="score-header">Your Score</h5>
        <h1 className="score">{ results[letterIndex].grade }</h1>
        <h3 className="percentage">{ score }%</h3>
        <h6 className="description"> { results[letterIndex].description }</h6>
        <h6 className="quarters">If everyone lived like you, we would be in quarantine for {quarter} more quarters</h6>
        { quarters.map(quarter => (
            <img className="quarter" src={Quarter} alt="quarter"></img>
          ))
        }
      </div>
      <div className="feeling">
        <h4 className="subtitle">HOW DO YOU FEEL?</h4>
        <Container>
          <Row className="row">
            <Col className="column3">
              <img className="emojis" src="https://hotemoji.com/images/dl/q/shocked-emoji-by-twitter.png" alt="shocked"></img><br/>
              <Button href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/reducing-stigma.html" target="_blank" className="emoji-btn">shocked</Button>
            </Col>
            <Col className="column3">
              <img className="emojis" src="https://hotemoji.com/images/dl/q/angry-face-emoji-by-twitter.png" alt="frustrated"></img><br/>
              <Button href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/stress-coping/grief-loss.html" target="_blank" className="emoji-btn">frustrated</Button>
            </Col>
            <Col className="column3">
              <img className="emojis" src="https://hotemoji.com/images/dl/i/disappointed-but-relieved-face-emoji-by-twitter.png" alt="stressed"></img><br/>
              <Button href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/stress-coping/index.html" target="_blank" className="emoji-btn">stressed</Button>
            </Col>
          </Row>
          <Row className="row" >
            <Col className="column3">
              <img className="emojis" src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/1f601.svg" alt="proud"></img><br/>
              <Button href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/stress-coping/young-adults.html" target="_blank" className="emoji-btn">proud</Button>
            </Col>
            <Col className="column3">
              <img className="emojis" src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/1f633.svg" alt="embarrassed"></img><br/>
              <Button href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/stress-coping/care-for-yourself.html" target="_blank" className="emoji-btn">embarrassed</Button>
            </Col>
            <Col className="column3">
              <img className="emojis" src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/1f61f.svg" alt="worried"></img><br/>
              <Button href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/managing-stress-anxiety.html" target="_blank" className="emoji-btn">worried</Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="suggestions">
        <h4 className="subtitle">SUGGESTIONS</h4>
        <h6 className="description">(how to improve each category)</h6>

      <Container>
        <Row className="row">
          <Col className="column4">
            <img className="emojis" src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/1f6e1.svg" alt="shield"></img><br/>
            <h5 className="category-title">Protection</h5>
            <h6 className="sug-descrip">Be sure to wear your mask when entering a public space. This not only protects you but others around you. Also, when eligible, get vaccinated in order to greatly reduce the risk of contracting the coronavirus.</h6>
          </Col>
          <Col className="column4">
            <img className="emojis" src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/1f9fc.svg" alt="soap"></img><br/>
            <h5 className="category-title">Hygiene</h5>
            <h6 className="sug-descrip">Make sure to wash your hands properly and often. It is suggested that you lather soap and water in your hands for 20 seconds (about the duration of singing ‘Happy Birthday’ two times). Also, be sure to sanitize any products that you may receive from stores or delivery.</h6>
          </Col>
          <Col className="column4">
            <img className="emojis" src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/1f4e6.svg" alt="package"></img><br/>
            <h5 className="category-title">Consumerism</h5>
            <h6 className="sug-descrip">Try to limit how much you shop in stores or eat in-person at restaurants. Instead, try your best to cook at home or order delivery. For other goods, try to use delivery rather than going in person. Also, to help your local communnity, check out small businesses near you which have especially been impacted by the pandemic.</h6>
          </Col>
          <Col className="column4">
            <img className="emojis" src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/1f93a.svg" alt="fencing"></img><br/>
            <h5 className="category-title">Prevention</h5>
            <h6 className="sug-descrip">Limit how much you leave your house for social reasons (and promote the same behavior with other household members). If you need to leave your house, get tested often to ensure that you are keeping yourself and those around you safe. Refrain from entering poorly-ventilated or crowded spaces. Pracice social distancing as much as possible.</h6>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="resources">
      <h4 className="subtitle">RESOURCES</h4>
      <div className="links">
        <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html" target="_blank">CDC: Suggestions to Prevent Getting Sick</a><br/>
        <a href="https://www.cdc.gov/coronavirus/2019-ncov/your-health/effective-masks.html" target="_blank">CDC: Improve How Your Mask Protects You</a><br/>
        <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/index.html" target="_blank">CDC: Information about the Covid-19 Vaccine</a><br/>
        <a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/testing-international-air-travelers.html" target="_blank">CDC: Testing and International Air Travel</a><br/>
      </div>
    </div>

    <Button onClick={goToHome} className="take-test-btn">Take the Test Again</Button>

    </div>
  )
}

export default Results;