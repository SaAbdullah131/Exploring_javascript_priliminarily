
const student ={
       firstName:"Abu Raihan",
        email:"hello@gmail.com",
        age:25,
        attend: true
}

function sendEmail(email) {
    console.log("Sending email to",email);
}
sendEmail(student.email);