#!/usr/bin/env node
import { prompt } from "inquirer";


(async () => {
  const input = await prompt({
    type: "input",
    name: "input name"
  })

  console.log(input)

})()