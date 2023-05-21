import { useState } from 'react';
import { Section } from "../Section/Section";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Statistics } from "../Statistics/Statistics";
import { Container } from './App.styled';
import { Notification } from '../Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (name) => {
    if (name === 'good') setGood(prev => prev + 1);
    if (name === 'neutral') setNeutral(prev => prev + 1);
    if (name === 'bad') setBad(prev => prev + 1);
  };

  const countTotalFeedback = () => {
    return (good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = (total) => {
    return (
      total > 0 ? Math.round((good * 100) / total) : 0
    );
  };

    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage(total);
  
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys({ good, neutral, bad })} onLeaveFeedback={handleClick}/>
        </Section>
        <Section title="Statistics">
          {total > 0 ?
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
            : <Notification message='There is no feedback' />
          }
          
        </Section>
      </Container>
  );
};
