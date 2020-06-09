import React from 'react';

function AdminUser() {
  const user = localStorage.getItem('adminUser');

  const formName = sessionStorage.getItem('formName');
  const formEmail = sessionStorage.getItem('formEmail');
  const formText = sessionStorage.getItem('formText');

  const formResults = [<b>Name: </b>, formName,
  <b>Email: </b>, formEmail, <b>Message: </b>, formText];
  console.log(formResults);

  return (
    <main>
      <h1>Welcome {user}</h1>

      <h1>Contact</h1>
      <h3>Name, email and messages from customers:</h3>

      <div className="frame">
        {formResults.map((contact, messages) => {
          return (

            <>
              <div key={messages}>
                <p>{contact}</p>
              </div>
            </>)

        })}
      </div>


    </main>
  )
}

export default AdminUser;