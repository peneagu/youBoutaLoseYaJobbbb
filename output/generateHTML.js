module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="./team.css">
    </head>
    <body>
        <div>
            <h1 class = "teamHead">My Team</h1>
        </div>
        <div class = "flexDiv">
            ${generateTeam(team)}
        </div>
    </body>
    </html>`;
};

