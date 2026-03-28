import React, { useState } from 'react'

function Form() {

    const [email, setEmail] = useState("");
    
    const [pass, setPass] = useState("");

    function handlesubmit(e) {
        e.preventDefault();
        console.log(email,pass)

        setEmail("");
        setPass("");
    }

  return (
    <div>

            <form action="" onSubmit={handlesubmit}>

                <input type="text" placeholder='email' value={email}
                onChange={(e) => setEmail(e.target.value)} />

                <input type="password" placeholder='pass' value={pass}
                onChange={(e) => setPass(e.target.value)} />

                <button type='submit'>submit</button>

            </form>

      
    </div>
  )
}

export default Form
