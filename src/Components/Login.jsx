import React from 'react'

const Login = () => {
    return (
        <>
            <form className='form form-control p-5 w-50 position-absolute top-50 start-50 translate-middle shadow p-3 mb-5 bg-body-tertiary rounded'>
                <div class="mb-3 row">
                <label for="dynamicEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="email"  class="form-control-plaintext" id="staticEmail" placeholder='email.example@email.com' />
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword" />
                </div>
            </div>
            </form>
        </>
    )
}

export default Login