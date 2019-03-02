// Importing users json
const users = require('../../data/users.json');
const companies = require('../../data/companies.json');

const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit'};

function getUserInfo(userId) {
    const tr = document.createElement('tr');
    const userLink = document.createElement('a');
    const div = document.createElement('div');
    const birthday = document.createElement('p');
    const pImage = document.createElement('p');
    const img = document.createElement('img');
    const company = document.createElement('p');
    const companyL = document.createElement('a');
    const industry = document.createElement('p');

    let userName;
    let userSex;
    let companyId;


    userLink.setAttribute('href', '#');
    div.classList.add('user-details');
    img.style.width = '100px';



    users.forEach((user) => {
        if (user.id === userId) {
            userName = `${user.first_name} ${user.last_name}`;
            userSex = user.gender;

            birthday.innerText = (new Date(Number(user.birthday))).toLocaleString('en', dateOptions) || '';
            img.setAttribute('src', user.avatar || '');
            companyId = user.company_id;
            
            if (companyId) {
                companies.forEach((companyItem) => {
                    if (companyItem.id === companyId) {
                        companyL.innerText = companyItem.title;
                        companyL.setAttribute('href', companyItem.url);
                        industry.innerText = `Industry: ${companyItem.industry}`;

                        company.innerText = 'Company: ';
                        company.appendChild(companyL);
                    }
                });
            }
        }
    })

    userLink.innerText = userSex === 'Male' ? `Mr. ${userName}` : `Ms. ${userName}`;

    div.appendChild(birthday);
    div.appendChild(pImage);
    div.appendChild(company);
    div.appendChild(industry);
    pImage.appendChild(img);

    tr.appendChild(userLink);
    tr.appendChild(div);

    return tr;
}

export default getUserInfo;