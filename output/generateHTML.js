generateHTML = (team) => {
    return `
    <!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="./team.css">

    <title>Team Profile Generator</title>
</head>

<body>

        <nav class="col-12 text-center bg-info my-5 py-5 display-4 text-white">My Team</nav>
        <div class="row" id="cards"></div>

                <div class="col">
                <div class="employee-card">
                <div class="card-header">
                    <h2>Lauryn Hill${team.name}</h2>
                    <h4>Manager ${team.position}</h4>
                </div>
                <div class="card-body">
                    <h5>ID: 778445 ${team.id}</h5>
                    <h5>Email: <a href="mailto: jada@ymail.com">lboy@gmail.com${team.email}</a></h5>
                    <h5>Office: 2115e ${team.officeN}</h5>
                </div>
                </div> ${team.school}
            </div> 



                <div class="col">
                <div class="employee-card">
                <div class="card-header">
                    <h2>Precious ${team.name}</h2>
                    <h4>Engineer ${team.position}</h4>
                </div>
                <div class="card-body">
                    <h5>ID: 654321 ${team.id}</h5>
                    <h5>Email: <a href="mailto: jada@ymail.com">peneagu@ymail.com${team.email}</a></h5>
                    <h5>Github: <a href="https://github.com/peneagu">Github${team.github}</a></h5>
                    <h5>School: Uni. of Arizona ${team.school}</h5>
                </div>
                </div>
            </div>


                <div class="col">
                <div class="employee-card">
                <div class="card-header">
                    <h2>Camryn Grahm ${team.name}</h2>
                    <h4>Employee ${team.position}</h4>
                </div>
                <div class="card-body">
                    <h5>ID: 46998 ${team.id}</h5>
                    <h5>Email: <a href="mailto: jada@ymail.com">cjones@ymail.com${team.email}</a></h5>
                    <h5>Office: 1115c ${team.officeN}</h5>

                </div>
                </div>
            </div> 


                <div class="col">
                <div class="employee-card">
                <div class="card-header">
                    <h2>Adachukwu ${team.name}</h2>
                    <h4>Intern ${team.position}</h4>
                </div>
                <div class="card-body">
                    <h5>ID: 123456 ${team.id}</h5>
                    <h5>Email: <a href="mailto: ada@ymail.com">ada@ymail.com${team.email}</a></h5>
                    <h5>School: Arizona State Uni. ${team.school}</h5>
                </div>
                </div>
            </div>
    

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
            crossorigin="anonymous"></script>
    </body>
</body>

</html>`;

};              

module.exports =