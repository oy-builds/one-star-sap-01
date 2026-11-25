import * as fs from "node:fs";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(
  "/output/entry.txt",
  "One star. He moved me from the sunny windowsill to the top of the fridge \u2018for a change of scenery\u2019 \u2014 now my view is a grease stain and my only sunlight is the fridge light at 2 a.m. when he raids the leftovers.\n",
  "utf-8",
);
