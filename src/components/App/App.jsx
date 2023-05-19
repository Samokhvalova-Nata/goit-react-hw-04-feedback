// import { Component } from 'react';
import { useState, useEffect } from 'react';
import { Section } from "../Section/Section";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Statistics } from "../Statistics/Statistics";
import { Container } from './App.styled';
import { Notification } from '../Notification';
// import options from "../../data/options.json";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setnNutral] = useState(0);
  const [bad, setBad] = useState(0);

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // }

  // const handleClick = (name) => {
  //     this.setState(prev => {
  //       return { [name]: prev[name] + 1 };
  //     });
  // };

  // const countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return (good + neutral + bad);
  // };

  // const countPositiveFeedbackPercentage = (total) => {
  //   return (
  //     total > 0 ? Math.round((this.state.good * 100) / total) : 0
  //   );
  // };


  
    return (
      <Container>
        {/* <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys()} onLeaveFeedback={handleClick}/>
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ?
            <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage(countTotalFeedback())} />
            : <Notification message='There is no feedback' />
          }
          
        </Section> */}
      </Container>
  );

};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   }

//   handleClick = (name) => {
//       this.setState(prev => {
//         return { [name]: prev[name] + 1 };
//       });
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     return (good + neutral + bad);
//   };

//   countPositiveFeedbackPercentage(total) {
//     return (
//       total > 0 ? Math.round((this.state.good * 100) / total) : 0
//     );
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage(total);
  
//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick}/>
//         </Section>
//         <Section title="Statistics">
//           {total > 0 ?
//             <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
//             : <Notification message='There is no feedback' />
//           }
          
//         </Section>
//       </Container>
//   );
//   }
// };