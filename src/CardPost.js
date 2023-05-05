import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import moment from "moment";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { amber, grey , indigo , lightBlue , teal } from "@mui/material/colors";

export default function Users() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    UserGet();
  }, []);

  const UserGet = () => {
    fetch("http://dev.opensource-technology.com:3000/api/posts?page=1")
      .then((res) => res.json())
      .then((result) => {
        setItems(result.posts);
      });
  };

  const UserUpdate = (id) => {
    window.location = "/edit/" + id;
  };

  return (
    <Container
      maxWidth="md"
      sx={{ padding: 4 }}
      style={{ backgroundColor: indigo[50] }}
    >
      <Paper sx={{ padding: 2 }} style={{ backgroundColor: indigo[200] }}>
        <Box display="flex">
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/" underline="none">
              <Button
                sx={{ m: 1 }}
                variant="contained"
                style={{ color: grey[900], backgroundColor: amber[400] }}
              >
                Post
              </Button>
            </Link>
            <Link href="draft" underline="none">
              <Button
                variant="contained"
                style={{ color: grey[900], backgroundColor: amber[400] }}
              >
                Draft
              </Button>
            </Link>
          </Box>
          <Box>
            <Link href="create_draft" underline="none">
              <Button
                variant="contained"
                style={{ color: grey[900], backgroundColor: amber[700] }}
                sx={{ m: 1 }}
              >
                Create Draft
              </Button>
            </Link>
          </Box>
        </Box>
        {items.map((note) => (
          <Card
            sx={{ m: 2, maxWidth: 780 }}
            style={{ backgroundColor: amber[50] }}
          >
            <CardContent>
              <Typography variant="h5">{note.title}</Typography>
              <Typography sx={{ p: 1 }} variant="body2" color="text.secondary">
                {note.content}
              </Typography>
            </CardContent>

            <CardActions>
              <Typography
                sx={{ m: 1 }}
                gutterBottom
                variant="h7"
                color="text.primary"
              >
                {moment(note.created_at).format("DD/MM/YYYY HH:mm")}
              </Typography>
              <Button
                sx={{ marginLeft: "auto" }}
                variant="contained"
                onClick={() => UserUpdate(note.id)}
                m={2}
                style={{ color: grey[900], backgroundColor: amber[700] }}
              >
                Edit
              </Button>
            </CardActions>
          </Card>
        ))}
      </Paper>
    </Container>
  );
}
