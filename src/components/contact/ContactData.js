import React from 'React';

function ContactData() {
  const formName = localStorage.getItem('formName');
  const formEmail = localStorage.getItem('formEmail');
  const formText = localStorage.getItem('formText');

  return (
    <main>
      <div >
        <h2>Message from {formName}</h2>
        <p><b>Name:</b> {formName}</p>
        <p><b>Email:</b> {formEmail}</p>
        <p><b>Message:</b> {formText}</p>
      </div>
    </main>
  )

}

export default ContactData;