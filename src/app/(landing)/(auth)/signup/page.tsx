import {cookies} from "next/headers";
import {redirect} from "next/navigation";

import {signupMutation} from "@/user/mutations/signup.mutation";

export default function SignUpPage() {
  if (cookies().get('accessToken')) {
    return redirect('/')
  }

  const handleSubmit = async (formData: FormData) => {
    "use server"

    const accessToken = await signupMutation({
      email: formData.get('email') as string,
      password: formData.get('password') as string
    })

    cookies().set('accessToken', accessToken)
  }

  return (
    <main>
      <h1>Sign Up</h1>
      <form action={handleSubmit}>
        <div>
          <label htmlFor="email-input">Email:</label>
          <br/>
          <input type="text" name="email" id="email-input"/>
        </div>
        <div>
          <label htmlFor="password-input">Password:</label>
          <br/>
          <input type="text" name="password" id="password-input"/>
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </main>
  )
}