const listStudents = [
    {
        studentPhoto: 'https://lms.ithillel.ua/uploads/images/885d3b77fc0d39a12aad31af709b9bd6.jpg',
        studentName: 'Антон',
        studentSurname: 'Чебикін',
        doneDz: '7',
        score: '698'
    },
    {
        studentPhoto: 'https://lms.ithillel.ua/uploads/images/e6ef3cc070c3d4c97a46f984b94e3436.jpg',
        studentName: 'Mukhatasov',
        studentSurname: 'Borys',
        doneDz: '7',
        score: '697'
    },
    {
        studentPhoto: 'https://lms.ithillel.ua/uploads/images/d1b3870e354c2d9668b8cd64e63bbf37.jpg',
        studentName: 'Kushniruk',
        studentSurname: 'Oleksandra',
        doneDz: '7',
        score: '687'
    },
    {
        studentPhoto: 'https://lms.ithillel.ua/uploads/images/7e0475ff04937622a8aa27a8d38be520.jpg',
        studentName: 'Odintsov',
        studentSurname: 'Oleksandr',
        doneDz: '7',
        score: '680'
    },
    {
        studentPhoto: 'https://lms.ithillel.ua/uploads/images/0fd3a6a4e07969f0dcb87452a6ba2d5f.jpg',
        studentName: 'Vashchenko',
        studentSurname: 'David',
        doneDz: '7',
        score: '675'
    }
];

listStudents.forEach(function (element) {    
    document.getElementById('students').insertAdjacentHTML(
        "beforeend",
        `     
        <tr>   
        <td><img src="${element.studentPhoto}"></img></td>
        <td>
        <div>${element.studentName}</div>  
        <div>${element.studentSurname}</div>
        </td> 
        <td>
        <div>${element.doneDz}</div> 
        <div>${element.score}</div> 
        </td>
        </tr>              
        `
    );
});