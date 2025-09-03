import React, { useState, useEffect } from 'react';

import {Radio,Button,Box,} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

import questionsData from '../data/questions.json';
import { Question } from '../types';

import { StyledContainer, StyledPaper, StyledTitle, StyledSubtitle, StyledProgress, StyledFormControl, StyledRadioGroup, StyledFormControlLabel, StyledButton, StyledHeader, StyledMenuIcon, StyledTypography, StyledBoxPerson } from './QuizStyles';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setQuestions(questionsData.questions);
  }, []);

  if (questions.length === 0) {
    return <div>Try again...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (event: { target: { value: string; }; }) => {
    setSelectedAnswer(parseInt(event.target.value));
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        setShowResults(true);
      }
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(null);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResults(false);
  };

if (showResults) {
    return (
      <StyledContainer>
        <StyledPaper>
          <MenuIcon />
            <StyledSubtitle>
              Personal information
            </StyledSubtitle>
          <StyledProgress variant="determinate" value={100} />
          <StyledTypography variant="h5" >
            Congratulation!
          </StyledTypography>
          <StyledBoxPerson >
            <Button variant="contained" onClick={handleRestart} >
              START
            </Button>
          </StyledBoxPerson>
        </StyledPaper>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <StyledPaper >
        <MenuIcon />
        <StyledSubtitle>
          Personal information
        </StyledSubtitle>
      <StyledProgress variant="determinate" value={progress} style={{ marginBottom: '20px', height: '10px' }}/>
        <StyledTitle variant="h5" gutterBottom>
          {currentQuestion.question}
        </StyledTitle>
        <StyledFormControl >
          <StyledRadioGroup value={selectedAnswer} onChange={handleAnswerSelect}>
            {currentQuestion.options.map((option, index) => (
              <StyledFormControlLabel key={index} value={index} control={<Radio />} label={option}/>
            ))}
          </StyledRadioGroup>
        </StyledFormControl>

        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
          <StyledButton variant="outlined" onClick={handleBack} disabled={currentQuestionIndex === 0} startIcon={<ArrowBack />} >
            BACK
          </StyledButton>
          <StyledButton variant="contained" onClick={handleNext} disabled={selectedAnswer === null} endIcon={<ArrowForward />}>
            NEXT
          </StyledButton>
        </Box>
      </StyledPaper>
    </StyledContainer>
  );
};

export default Quiz;