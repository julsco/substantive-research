# Substantive Research test

To run this programm run "npm install" to download dependencies and devDependencies that are listed in package.json.
After, run "npm run dev"

Live version at https://julian-scotti-substantive-research.netlify.app/

# Plan and approach

To get the percentage of interactions for each sector I first stored all the sectors in an array.
Then I mapped over it and filtered the data from the API to get all the interactions for each sector.
I also kept the sector_id in case needed for future upgrades.
With all this data I created an object of type: 
    {
        sector: name of the sector,
        sector_id: ID of the sector,
        number_interactions: number of interactions,
        percentage: percentage of interactions for each sector
    }

After this, I built an UI and showed the data obtained using a table and a pie chart.



# Future plans

- An extra column could be added on the table chart with a button that when clicked would show all the dates when the interactions were done. This would give a better data visualization to the user in a user-friendly way.

- Build a column chart to show the periods of time when the interactions were done to see in which months the interactions were higher/lower. This could be done either one for each sector or one for all the sectors together depending on the user's needs. It would give important data for decision making.    

