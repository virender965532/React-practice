import { CameraAlt } from '@mui/icons-material';
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import { useInputValidation } from '6pp';
import { usernameValidator } from '../utils/validators';

function Login() {

  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = ()=>setIsLogin(!isLogin);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useInputValidation("");

  return <Container component={"main"} maxWidth="xs" sx={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
    <Paper elevation={3} sx={{padding:4, display:"flex",flexDirection:"column", alignItems:"center"}}>
    {isLogin ? (
      <>
      <Typography varient="h5">Login</Typography>
      <form style={{width:"100%", marginTop: "1rem", }}>
        <TextField required fullWidth label="Username" margin="normal" variant="outlined" value={username.value} onChange={username.changeHandler} />
        <TextField required fullWidth label="Password" margin="normal" variant="outlined" value={password.value} onChange={password.changeHandler} />
        <Button sx={{marginTop:"1rem"}} fullWidth variant="contained" color="primary" type="submit">Login</Button>
      </form>
        <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
        <Button fullWidth variant="text" onClick={toggleLogin}>SIGN UP INSTEAD</Button>
      </>
    ): (
      <>
      <Typography varient="h5">Sign Up</Typography>
      <form style={{width:"100%", marginTop: "1rem", }}>
        <Stack position={"relative"} width={"10rem"} margin={"auto"}>
          <Avatar sx={{height:"10rem", width:"10rem", objectFit:"contain"}} />
          <IconButton sx={{position:"absolute",bottom:"0", right:"0", bgColor:"rgba(0,0,0,0,0.5)", "hover":{bgColor:"rgba(0,0,0,0,0.7)"}}} component="label">
            <>
              <CameraAlt />
              <VisuallyHiddenInput type="file" />
            </>
          </IconButton>
        </Stack>
        <TextField required fullWidth label="Name" margin="normal" variant="outlined" value={name.value} onChange={name.changeHandler} />
        <TextField required fullWidth label="Bio" margin="normal" variant="outlined" value={bio.value} onChange={bio.changeHandler} />
        <TextField required fullWidth label="Username" margin="normal" variant="outlined" value={username.value} onChange={username.changeHandler} />
        {username.error && (
          <Typography color="error" variant='caption'>{username.error}</Typography>
        )}
        <TextField required fullWidth label="Password" margin="normal" variant="outlined" value={password.value} onChange={password.changeHandler} />
        <Button sx={{marginTop:"1rem"}} fullWidth variant="contained" color="primary" type="submit">Sign Up</Button>
      </form>
      <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
      <Button fullWidth variant="text" onClick={toggleLogin}>Login</Button>
      </>
    )}
    </Paper>
  </Container>
}

export default Login