 export const registrationData = {
    invalidData: [
        { username: "", password: "", message: "Please, provide valid data" },
        { username: "", password: "123abcA!", message: "Username is required" },
        { username: "Hiqo", password: "", message: "Password is required" },
        { username: "Hi", password: "123abcA!", message: "Username should contain at least 3 characters" },
        { username: " Hiqo", password: "123abcA!", message: "Prefix and postfix spaces are not allowed is username" },
        { username: "Hiqo ", password: "123abcA!", message: "Prefix and postfix spaces are not allowed is username" },
        { username: "Hiqo", password: "123abcA", message: "Password should contain at least 8 characters" },
        { username: "Hiqo", password: "123abcaa", message: "Password should contain at least one character in upper case" },
        { username: "Hiqo", password: "123ABCAA", message: "Password should contain at least one character in lower case" },
        { username: "Hiq", password: "123abcA!", message: "Username is in use" },
            ],

    validData: [
        { username: "Hiq", password: "123abcA!", message: "Successfully registered! Please, click Back to return on login page" },
        { username: "HiqoUserHiqoUserHiqoUserHiqoUserHiqoUser", password: "123abcA123abcA123abc", message: "Successfully registered! Please, click Back to return on login page" }
            ]
}
