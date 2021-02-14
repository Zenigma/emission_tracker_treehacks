## Inspiration
When challenged by TreeHacks🌲 to think of a way to promote sustainability, we thought there was no better way to bring awareness to car pollution than by "converting" your car's daily commute into **trees**🌲. Everyone on the team has lived in So Cal, so we are all too familiar with long commutes by car and we wondered just how many trees 🌲 it would take to balance out our daily commutes.

## What it does
When you first visit the website, you are greeted with a lush forest to serve as a reminder of what's at stake🌲. Then you enter your car's make, model, and year in that order. Suggestions drop-down to show what options we have in our database. For the best results, use the suggestions. After doing so, you then input your daily commute distance and hit calculate. On the next screen, you will then see the amount of CO2 your car releases during your commute and the number of trees that are needed to counteract the pollution. If your car is electric, you will see no trees, which is good for the environment, but bad if you like tree pictures🌲. From there you can then choose to calculate again.

## How we built it
First, we did some research and found an Excel sheet with car emissions published by the US EPA. From there we implemented the _routes_🌲 to our different pages by using React Router. After converting the Excel spreadsheets to JSON, we then created search boxes with suggestions by using Regex expressions on the JSON. After some quick maths, we then were able to display the amount of CO2 your daily commute releases using the grams of CO2 per mile value we have in our database for your car. We then converted this number to trees based on a website that said an average tree can absorb 48 pounds of CO2 per year. Finally, we made everything look better using CSS and Bootstrap.

## Challenges we ran into
One of the challenges was navigating through our JSON file structure but after a bunch of console.log statements, we finally figured it out. Another difficulty was aligning the search bar, but once we discovered flexbox everything was much easier. We also had difficulty getting a variable number of trees to display, but we eventually figured it out using flexbox and a variable-length array.🌲

## Accomplishments that we're proud of
We're honestly very proud that we actually completed what we put our minds to, considering this is the first hackathon for most of our team. 🌲We're also excited about how what we developed has the potential to bring to the attention of others the sheer number of trees that are needed to absorb a car's CO2! 🌲🌲

## What we learned
Our biggest takeaway from this project is the realization that a lot more trees are needed to counteract car pollution than we initially thought🌲. Besides that, we also learned a lot about React and Bootstrap, while delving deeper into CSS and JavaScript.

## What's next for Emissions Calculator
Going forwards, we would like to improve our search functionality. Another feature we would have liked to add is the ability to calculate your daily commute distance from your starting point and destination.🌲🌲
