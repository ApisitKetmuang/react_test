import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function UserCreate() {
  const handleSubmit = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "content": content,
      "title": title,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://dev.opensource-technology.com:3000/api/posts", requestOptions)
        alert('Add data Success :)')
        window.location.href = '/'
  };
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ padding: 5 }}>
        <Typography align="center" variant="h6" gutterBottom>
          New Post
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="title"
                label="Title"
                variant="outlined"
                fullWidth
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="content"
                label="Content"
                variant="outlined"
                fullWidth
                onChange={(e) => setContent(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button type ="submit" variant="outlined" fullWidth>
                Save
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button href="/" variant="outlined" fullWidth>
                Cancel
              </Button>
            </Grid>
            {/* <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Publish Now
              </Button>
            </Grid> */}
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}
