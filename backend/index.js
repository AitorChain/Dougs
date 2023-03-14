const express = require('express')
const app = express()
const port = 3000

const allCategories = require('./fullCategories.json')

app.get('/all-categories', (req, res) => {
  res.json(allCategories);
});

app.get('/visible-categories', (req, res) => {
  let fakeVisibleCategories = allCategories
    .filter(category => category.id % 3 === 0)
    .map(({id}) => ({id}))

  res.json(fakeVisibleCategories);
});

app.get('*', (req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
