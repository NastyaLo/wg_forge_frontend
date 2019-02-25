// Importing users json
const users = require('../../data/users.json');

function getUserInfo(userId) {
    const link = document.createElement('a');
    let userName;
    let userSex;

    link.setAttribute('href', '#');

    users.forEach((user) => {
        if (user.id === userId) {
            userName = `${user.first_name} ${user.last_name}`;
            userSex = user.gender;
        }
    })

    link.innerText = userSex === 'Male' ? `Mr. ${userName}` : `Ms. ${userName}`;
    
    return link;
}

export default getUserInfo;