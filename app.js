const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const morgan = require("morgan")
const port = parseInt(process.env.PORT || 3000)

app.use(morgan('dev'))

app.use(bodyParser.json())

const exampleObject = {
  data: [
    {
      id: 1,
      mealName: "Tuna Noodle Casserole",
      mealPic: "./static/TNC.png",
      instructionsLink: "http://www.recipes.com/",
      funIdeas: "Crunch up potato chips and sprinkle them on top.",
      i1: "8oz Egg Noodles",
      i2: "5oz Can Tuna",
      i3: "8oz can Cream of Mushroom Soup",
      i4: "1/2 cup Milk",
      i5: "1 cup Frozen Peas",
      i6: "1/4 tsp Garlic Powder",
      i7: "1/4 tsp Dried Thyme",
      i8: "",
      i9: "",
      i10: "",
      i11: "",
      i12: "",
      i13: "",
      i14: "",
      i15: ""
    }
  ]
}

app.get('/', function(req, res) {
  res.send(exampleObject)
})

app.listen(port, () => console.log('Example app listening on port 3000!'))
