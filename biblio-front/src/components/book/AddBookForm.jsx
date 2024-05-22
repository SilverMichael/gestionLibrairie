import React from 'react'
import { CustomButton, CustomInput } from '../index'
import { Link } from 'react-router-dom'

const AddBookForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('first')
    }
  return (
    <div>
        <div className="login w-full  flex justify-center items-center flex-col  h-full bg-white">
        <h2 className="text-[30px] font-semibold">Register</h2>
        <div className="form-login-container card  h-fit mx-auto border-none md:shadow-2xl p-10 w-full ">
          <form action="" onSubmit={handleSubmit}>
            <div className=" md:grid md:grid-cols-2 md:gap-2">
              <CustomInput
                name="first-name"
                label="First Name"
                type="text"
                variant="normal"
                dimension="medium"
                placeholder=""
                // value={user.firstName}
                // onChange={(e) =>
                //   setUser({
                //     ...user,
                //     firstName: e.target.value,
                //   })
                // }
                required
              />
              <CustomInput
                name="lastname"
                label="Last Name"
                type="text"
                variant="normal"
                dimension="medium"
                placeholder=""
                // value={user.lastName}
                // onChange={(e) =>
                //   setUser({
                //     ...user,
                //     lastName: e.target.value,
                //   })
                // }
                required
              />
            </div>
            <div className=" md:grid md:grid-cols-2 md:gap-2">
              <CustomInput
                name="PSEUDO"
                label="Pseudo"
                type="text"
                variant="normal"
                dimension="medium"
                placeholder=""
                // value={user.pseudo}
                // onChange={(e) =>
                //   setUser({
                //     ...user,
                //     pseudo: e.target.value,
                //   })
                // }
                required
              />
              <CustomInput
                name="age"
                label="Age"
                type="number"
                variant="normal"
                dimension="medium"
                placeholder=""
                // value={user.age}
                // onChange={(e) =>
                //   setUser({
                //     ...user,
                //     age: e.target.value,
                //   })
                // }
                required
              />
            </div>
            <CustomInput
              name="email"
              label="Email"
              type="email"
              variant="normal"
              dimension="medium"
              placeholder="your@email.com"
            //   value={user.email}
            //   onChange={(e) =>
            //     setUser({
            //       ...user,
            //       email: e.target.value,
            //     })
            //   }
            //   error={errorInput?.errorMail}
              required
            />

            <CustomInput
              name="password"
              label="Password"
              placeholder="+8 character"
              type="password"
            //   value={user.password}
            //   onChange={(e) =>
            //     setUser({
            //       ...user,
            //       password: e.target.value,
            //     })
            //   }
              required
            />
            <CustomInput
              name="password-confirmed"
              label="Confirm password"
              placeholder="Retype your password"
              type="password"
            //   value={user.confirmedPassword}
            //   onChange={(e) =>
            //     setUser({
            //       ...user,
            //       confirmedPassword: e.target.value,
            //     })
            //   }
            //   error={errorInput?.errorPassword}
              required
            />

            <CustomButton
              title="Register"
              btnType="submit"
              containerStyle="bg-green-600 hover:bg-green-500 text-white mt-5 w-full rounded-md"
              // handleClick={handleSubmit}
            />
            <div className="flex flex-wrap">
              <p className="mt-4">
                You already have an account ?{" "}
                <Link className="text-blue-700" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddBookForm