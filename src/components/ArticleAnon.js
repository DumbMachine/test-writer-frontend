import React, { Fragment, useEffect } from "react";
import SearchAppBar from "./SearchAppBar";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import axios from "axios";

import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

import apiData from "./test.json";

import "./Article.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  card: {
    padding: "1em",
  },
}));

const fetchJson = async () => {
  await axios
    .post("http://127.0.0.1:8000/token", {
      index: 1,
      name: "serach the things",
    })
    .then((response) => {
      // console.log(response.data.data)
      return response.data.data;
    })
    .catch((response) => {
      console.error(response);
    });
};

function TranslatedText(props) {
  const [hover, setHover] = React.useState(false);

  const thisSitePointChunks = window.location.href.split("/");
  const thisEndPoint = thisSitePointChunks[thisSitePointChunks.length - 1];

  return (
    <React.Fragment>
      <span> </span>
      <span
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundColor: "#A5D6A7",
          padding: "2px",
          borderRadius: "6px",
        }}
      >
        {props.token[props.defLanguage]}
        {hover && (
          <React.Fragment>
            <span
              style={{
                backgroundColor: "#80DEEA",
                padding: "2px",
                borderRadius: "6px",
              }}
            >
              {" "}
              {props.token[props.changeLanguage]}
            </span>
          </React.Fragment>
        )}
      </span>
      <span> </span>
    </React.Fragment>
  );
}

function Article() {
  const [lang, setLang] = React.useState(1);
  const [apiData, setApiData] = React.useState([]);
  const [level, setLevel] = React.useState(0);
  const [text, setText] = React.useState([]);
  const LEVELS = [
    {
      info: "This is the first level",
      level: 1,
    },
    {
      info: "This is the second level",
      level: 2,
    },
    {
      info: "This is the third level",
      level: 3,
    },
  ];

  const LANGUAGE_CODES = [
    {
      itr: 1,
      short: "spa",
      long: "spanish",
    },
    {
      itr: 2,
      short: "fra",
      long: "french",
    },
    {
      itr: 3,
      short: "ind",
      long: "indonesian?",
    },
    {
      itr: 4,
      short: "eng",
      long: "english",
    },
  ];

  const updateText = (thisData, thisLevel, thisLangIndex) => {
    const newText = [];
    if (thisData) {
      thisData.forEach((sentence) => {
        const someText = [];
        if (sentence[thisLevel + 1]) {
          sentence[thisLevel + 1].forEach((token) => {
            if (typeof token === "string") {
              someText.push(`${token} `);
            } else {
              someText.push(
                <TranslatedText
                  token={token}
                  defLanguage={LANGUAGE_CODES[thisLangIndex].short}
                  changeLanguage="eng"
                />
              );
            }
          });
        }
        newText.push(someText);
      });
    }
    setApiData(thisData);
    setText(newText);
  };

  const handleLevelChange = (event) => {
    const thisLevel = event.target.value;
    setLevel(thisLevel);
    updateText(apiData, thisLevel, lang);
  };

  const handleLangChange = (event) => {
    const thisLang = event.target.value;
    setLang(thisLang);
    updateText(apiData, level, thisLang);
  };

  const classes = useStyles();

  useEffect(() => {
    // fetchJson(setApiData).then((data) => {setApiData(data)})
    fetch('http://127.0.0.1:8000/token', {
      method: "POST",
      body: JSON.stringify({
        index: 1
      })
    })
    .then(response => response.json())
    .then(data => {updateText(data.data, level, lang);console.log(data.data)});

    // console.log(apiData, " this is the current data");
    // updateText(level, lang);
  }, []);

  return (
    <div className="article">
      {/* <div className="article_searchBar">
        <SearchAppBar />
      </div> */}
      <div className="articleComponents">
        <br></br>
        <Card className={classes.card}>
          <CardActions>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Level</InputLabel>
              <Select
                labelId="level-simple-select-label"
                id="level-simple-select"
                value={level}
                onChange={handleLevelChange}
              >
                {LEVELS.map((element, index) => {
                  if (element) {
                    return <MenuItem value={index}>{element.level}</MenuItem>;
                  }
                })}
              </Select>
              <FormHelperText>
                Learn more about levels{" "}
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">here</a>.
              </FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Language</InputLabel>
              <Select
                labelId="level-simple-select-label"
                id="level-simple-select"
                value={lang}
                onChange={handleLangChange}
              >
                {LANGUAGE_CODES.map((element, index) => {
                  if (element) {
                    return <MenuItem value={index}>{element.long}</MenuItem>;
                  }
                })}
              </Select>
              <FormHelperText>
                List of supported languages{" "}
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">here</a>.
              </FormHelperText>
            </FormControl>
          </CardActions>
          <CardContent>
            <Typography className={classes.title} color="textSecondary">
              {/* asdf: {apiData} */}
            </Typography>
            <Typography component="p">
              {/* {text} */}
              {text.map((element, index) => {
                return element;
              })}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Article;
