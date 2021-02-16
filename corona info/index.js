// const covid = require('novelcovid');

// Declare the package
const covid = require("novelcovid");

const express = require("express");
const app = express();

var cors = require('cors');

app.use(cors());

port = 3000

app.get("/getAll", async (req, res) => {
    try {
        let all = await covid.getAll();
        res.json(all);
      } catch (error) {
    
    }
});

app.get("/getTotalDeaths", async (req, res) => {
    try {
        let all = await covid.getAll();
        res.json(all.deaths);
      } catch (error) {
    
    }
});

app.get("/getTotalCases", async (req, res) => {
    // Now we await it.
  try {
    let all = await covid.getAll();
    res.json(all.cases);
  } catch (error) {

  }
});

app.get("/getTotalRecovered", async (req, res) => {
    // Now we await it.
  try {
    let all = await covid.getAll();
    res.json(all.recovered);
  } catch (error) {

  }
});

app.get("/getAllCountries", async (req, res) => {
    // Now we await it.
  try {
    let sortedCountries = await covid.getCountry({sort: 'recovered'});
    res.json(sortedCountries);
  } catch (error) {

  }
});

app.get("/getSpecificCountry", async (req, res) => {
    // Now we await it.
  try {
    let specificCountry = await covid.getCountry({country: 'United States'});
    res.json(specificCountry);
  } catch (error) {

  }
});

// app.listen(3000);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))