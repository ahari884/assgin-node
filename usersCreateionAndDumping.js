var axios = require('axios');
var fs = require('fs');
var _ = require('lodash');
var dataToBeWritten = [];

axios.get('https://randomuser.me/api/?results=100')
    .then(function (results) {
        finalData = _.map(results.data.results, (user, userIndex) => {
            return {
                email: user.email,
                firstName: user.name.first,
                lastName: user.name.last,
                role: userIndex < 80 ? 'user' : 'developer',
                password: user.login.password
            }
        })

        dataToBeWritten = finalData;

        // writeToAFile();

        finalData.forEach(async function (user, userIndex) {
            await axios.post('http://localhost:5000/api/auth/signup', user)
                .then(function (response) {
                    console.log('Response ', response.status, response.data);
                    if(userIndex == 99){
                        writeToAFile();
                    }
                }).catch(function (err) {
                    console.log('Error ', err)
                })
        })

    }).catch(function (err) {
        console.log('Error getting details', err)
    })



function writeToAFile() {
    console.log('Writing data to users.json');
    fs.readFile('users.json', function (err) {
        if (err) {
            console.log('Error reading', err)
        } else {
            fs.writeFile('users.json', JSON.stringify(dataToBeWritten), function (err) {
                if (err)
                    console.log('Error writing')
                else
                    console.log('done writing')
            });
        }

    });
}