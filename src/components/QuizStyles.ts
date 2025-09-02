import { styled } from '@mui/material/styles';
import { Paper, Typography, LinearProgress, Button, IconButton, FormControlLabel, RadioGroup, FormControl, Container } from '@mui/material';

export const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: '0',
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  maxWidth: '360px',
  MaxHeight: '740px',
  padding: '16px',
  borderRadius: '16px',
  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  backgroundColor: '#ffffff',
  position: 'relative',
  overflow: 'hidden',
}));

export const StyledHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '16px',
  padding: '0 16px',
}));

export const StyledMenuIcon = styled(IconButton)(({ theme }) => ({
  padding: '8px',
  color: '#333',
}));

export const StyledSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  color: '#555',
  textAlign: 'center',
  fontWeight: 'normal',
  margin: '0',
}));

export const StyledProgress = styled(LinearProgress)(({ theme }) => ({
  height: '6px',
  borderRadius: '3px',
  backgroundColor: '#e0e0e0',
  '& .MuiLinearProgress-bar': {
    backgroundColor: '#4CAF50',
  },
  width: '320px', 
  margin: '0 auto', 
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '24px',
  textAlign: 'center',
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  width: '100%',
  marginBottom: '24px',
}));

export const StyledRadioGroup = styled(RadioGroup)(({ theme }) => ({
  flexDirection: 'column',
  gap: '16px',
}));

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  fontSize: '16px',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: '84px',
  height: '42px',
  padding: '8px 16px',
  fontSize: '14px',
  textTransform: 'uppercase',
  backgroundColor: '#ccc',
  color: '#333',
  '&:hover': {
    backgroundColor: '#1976D2',
    color:'white',
  },
}));