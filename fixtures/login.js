export const loginData = {
    validData: { username: "Hiq", password: "123abcA!", message: `Hello, Hiqo!` },
    invalidData: [
        { username: "", password: "", message: "Credentials are required" },
        { username: "", password: "123abcA!", message: "Username is required" },
        { username: "Hiqo", password: "", message: "Password is required" },
        { username: "Hiq", password: "123abcA!asd", message: "Invalid credentials" },
      ]
}