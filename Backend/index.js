const express = require('express');
const { readFile } = require('fs');
const app = express();

//Making a server connection
app.get('/', (request, response) =>{

    readFile('../Frontend/create_new_account.html','utf8', (err,html)=>{
        if(err){
            response.status(500).send('sorry, out of order')
        }

        response.send(html);
    })
})

app.listen(process.env.PORT || 3000,  ()=>console.log('App avalaible on port 3000'))


//1. connect the database
//2. create the user table when users signup
//3. In the login section fetch the data from the table and check and do the validation
//4. show the login succesfull and the profile picture