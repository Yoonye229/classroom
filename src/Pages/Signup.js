import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { useSignup } from '../hooks/useSignup';

const theme = createTheme();

const SignUp = () => {
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [educator, setIsEducator] = useState('');
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(firstname, email, password, educator);

    if (signup) {
      alert('Đăng ký thành công');
    } else {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="first name"
                  label="Tên của bạn"
                  fullWidth
                  onChange={(e) => setFirstname(e.target.value)}
                  value={firstname}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  type={'email'}
                  fullWidth
                  label="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  fullWidth
                  type={'password'}
                  label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  required
                  fullWidth
                  label="Your role"
                  id="position"
                  onChange={(e) => setIsEducator(e.target.value)}
                  value={educator}
                >
                  <MenuItem value="false">Student</MenuItem>
                  <MenuItem value="true">Teacher</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Button
              component="button"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoading}
            >
              Đăng ký
            </Button>
            {error && <div className="error">{error}</div>}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/" variant="body2">
                  {'Bạn đã có tài khoản? Hãy đăng nhập'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
