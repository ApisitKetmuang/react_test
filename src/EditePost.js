import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { amber , grey } from '@mui/material/colors';

export default function UserEdit() {
  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      content: content,
      published: false,
      title: title,
    });

    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "http://dev.opensource-technology.com:3000/api/posts/" + id,
      requestOptions
    );
    alert("Update data Success :)");
    window.location.href = "/";
  };
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ padding: 5 }}>
        <Paper sx={{ my: 10, p: 4 }} style={{ backgroundColor: amber[100] }}>
          <Typography align="center" variant="h3" gutterBottom >
            Edit Post
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
                  style={{ backgroundColor: amber[50] }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="content"
                  label="Content"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setContent(e.target.value)}
                  style={{ backgroundColor: amber[50] }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button type="submit" variant="contained" fullWidth style={{ color:grey[900] , backgroundColor: amber[700] }}>
                  Save
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button href="/" variant="contained" fullWidth style={{ color:grey[900] , backgroundColor: amber[400] }}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
