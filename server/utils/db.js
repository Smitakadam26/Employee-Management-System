import mysql from 'mysql'

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Kadam2004*",
    database: "employee",
    insecureAuth :true
})

con.connect(function(err) {
    if(err) {
        console.log("connection error",err)
    } else {
        console.log("Connected")
    }
})

export default con;

