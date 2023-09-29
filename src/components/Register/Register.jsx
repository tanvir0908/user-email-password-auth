export default function Register() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(`${email} ${password}`);
  };

  return (
    <div className="my-20">
      <div className="mx-auto flex w-full flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold">Please Register</h2>
        <form className="my-5" onSubmit={handleFormSubmit}>
          <input
            className="border w-96 px-4 py-2 mb-3 rounded-lg"
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
          />
          <br />
          <input
            className="border w-96 px-4 py-2 mb-3 rounded-lg"
            type="password"
            name="password"
            placeholder="Password"
          />
          <br />
          <input
            className="btn btn-secondary w-full"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
}
