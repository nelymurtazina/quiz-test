import { styled } from '@mui/material/styles';
import { Paper, Typography, LinearProgress, Button, IconButton, FormControlLabel, RadioGroup, FormControl, Container, Box } from '@mui/material';

export const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  minHeight: '100%',
  padding: '0',
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  maxWidth: '360px',
  MaxHeight: '740px',
  padding: '16px',
  borderRadius: '20px',
  backgroundColor: '#F5F5F7',
  position: 'fixed',
}));

export const StyledHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  maxWidth:'360px',
}));

export const StyledMenuIcon = styled(IconButton)(({ theme }) => ({
  padding: '8px',
  color: '#191919',
}));

export const StyledSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  color: '#191919',
  textAlign: 'center',
  fontWeight: 'normal',
  padding: '9.5px 104px 17.5px 99px',
}));

export const StyledProgress = styled(LinearProgress)(({ theme }) => ({
  borderRadius: '3px',
  backgroundColor: '#e0e0e0',
  '& .MuiLinearProgress-bar': {
    backgroundColor: '#4CAF50',
  },
  margin: '0 auto', 
  marginBottom: '20px', 
  height: '10px'
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: '26px',
  fontWeight: 'bold',
  marginBottom: '14px',
  textAlign: 'center',
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  width: '100%',
  marginBottom: '4px',
}));

export const StyledRadioGroup = styled(RadioGroup)(({ theme }) => ({
  flexDirection: 'column',
  gap: '12px',
}));

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  fontSize: '16px',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: '84px',
  fontSize: '16px',
  backgroundColor: '#ccc',
  color: '#333',
  marginTop:'220px',
  '&:hover': {
    backgroundColor: '#1976D2',
    color:'white',
  },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex', 
  justifyContent: 'space-between', 
  mt: 2
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
textAlign: 'center', 
margin: '241px 0px',
fontWeight: 700,
fontSize: '26px'
}));

export const StyledBoxPerson = styled(Box)(({ theme }) => ({
display: 'flex', 
justifyContent: 'center', 
marginTop: 'auto', 
marginBottom: '16px'
}));