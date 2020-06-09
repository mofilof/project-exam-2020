import React from 'react';

function AdminUser() {
  const user = localStorage.getItem('adminUser');

  const formName = sessionStorage.getItem('formName');
  const formEmail = sessionStorage.getItem('formEmail');
  const formText = sessionStorage.getItem('formText');

  const formResults = [formName, formEmail, formText];
  console.log(formResults);

  /*
  <button onclick="myFunction()">Try it</button>
    function myFunction() {
      var para = document.createElement("P");
      para.innerHTML = "This is a paragraph.";
      document.getElementById("myDIV").appendChild(para);
    } */

  return (
    <main>
      <h1>Welcome {user}</h1>

      <h1>Contact</h1>
      <h3>Name, email and messages from customers:</h3>

      <div className="frame">
        {formResults.map((contact, messages) => {
          return (

            <div key={messages}>
              <p>{contact}</p>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default AdminUser;