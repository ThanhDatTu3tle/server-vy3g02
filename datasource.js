
const { DataSource } = require('typeorm');


const AppDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "sa",
    password: "dat27032001",
    database: "server-vy3-g02",
    entities: ['dist/output/entities/*js'], 
});

AppDataSource.query("SELECT * FROM server-vy3-g02")
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    }) 