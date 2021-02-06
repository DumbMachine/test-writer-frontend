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

import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

import apiInformation from "./test.json";

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

function TranslatedText(props) {
  const [hover, setHover] = React.useState(false);

  return (
    <React.Fragment>
      <span> </span>
      <span
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundColor: "lightblue",
          padding: "1px",
          borderColor: "red",
        }}
      >
        <u>{props.token[props.defLanguage]}</u>
        {/* <span>{" "}</span> */}
        {hover && (
          <React.Fragment>
            <span
              style={{
                backgroundColor: "lightgreen",
                padding: "1px",
                borderColor: "red",
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

  const updateText = (thisLevel, thisLangIndex) => {
    const newText = [];
    apiInformation.forEach((sentence) => {
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
    setText(newText);
  };

  const handleLevelChange = (event) => {
    const thisLevel = event.target.value;
    setLevel(thisLevel);
    updateText(thisLevel, lang);
  };

  const handleLangChange = (event) => {
    const thisLang = event.target.value;
    setLang(thisLang);
    updateText(level, thisLang);
  };

  const classes = useStyles();

  useEffect(() => {
    updateText(level, lang);
  }, []);

  return (
    <div className="article">
      <div className="article_searchBar">
        <SearchAppBar />
      </div>
      <div className="articleComponents">
        <br></br>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary">
              {/* {apiInformation.type} of lang: {apiInformation.lang} */}
            </Typography>
            <Typography component="p">
              {/* {text} */}
              {text.map((element, index) => {
                return element;
              })}
            </Typography>
          </CardContent>
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
              <FormHelperText>Learn more about levels here.</FormHelperText>
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
                <a href="https://www.reddit.com/">here</a>.
                {/* <Link path="https://www.reddit.com/">here</Link>. */}
              </FormHelperText>
            </FormControl>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default Article;
