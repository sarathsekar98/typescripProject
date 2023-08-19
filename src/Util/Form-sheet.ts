// @ts-ignore
// @ts-ignore
export const formSignIn = {
    name: "Signin",
    inputs: [
        {
            type: "text",
            classProps:{md:12},
            props: {
                type: "text",
                className:"form-control mb-4",
                name: "email",
                pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\n",
                title:"please enter the valid email",
                placeholder: `enter the email`,
                required:"required"
            }
        },
        {
            type: "text",
            classProps:{md:12},
            props: {
                type: "password",
                className:"form-control mb-4",
                name: "password",
                placeholder: "enter the password",
                required:"required"
            }
        },
        {
            type: "button",
            classProps:{md:12},
            props: [
                {
                    className: "btn btn-sm btn-primary mr-2", name: "submit", value: "submit"
               },
                {
                    className: "btn btn-sm btn-warning", name: "cancel", value: "cancel"
                }
            ]
        }
    ]
}



export const formSignUp = {
    name: "Signup",
    inputs: [
        {
            type: "text",
            classProps:{md:6},
            props: {
                type: "text",
                className:"form-control mb-4",
                name: "firstname",
                pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\n",
                title:"please enter the valid email",
                placeholder: `enter the email`,
                required:"required"
            }
        },
        {
            type: "text",
            classProps:{md:6},
            props: {
                type: "text",
                className:"form-control mb-4",
                name: "lastname",
                pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\n",
                title:"please enter the valid email",
                placeholder: `enter the email`,
                required:"required"
            }
        },
        {
            type: "text",
            classProps:{md:6},
            props: {
                type: "text",
                className:"form-control mb-4",
                name: "passowrd",
                pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\n",
                title:"please enter the valid email",
                placeholder: `enter the email`,
                required:"required"
            }
        },
        {
            type: "text",
            classProps:{md:6},
            props: {
                type: "text",
                className:"form-control mb-4",
                name: "confirm password",
                pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\n",
                title:"please enter the valid email",
                placeholder: `enter the email`,
                required:"required"
            }
        },
        {
            type: "text",
            classProps:{md:6},
            props: {
                type: "text",
                className:"form-control mb-4",
                name: "email",
                pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\n",
                title:"please enter the valid email",
                placeholder: `enter the email`,
                required:"required"
            }
        },
        {
            type: "text",
            classProps:{md:6},
            props: {
                type: "password",
                className:"form-control mb-4",
                name: "password",
                placeholder: "enter the password",
                required:"required"
            }
        },
        {
            type: "text",
            classProps:{md:12},
            props: {
                type: "file",
                className:"form-control mb-4",
                name: "profilepic",
                placeholder: "enter the password",
                required:"required"
            }
        },
        {
            type: "button",
            classProps:{md:12},
            props: [
                {
                    className: "btn btn-sm btn-primary mr-2", name: "submit", value: "submit"
                },
                {
                    className: "btn btn-sm btn-warning", name: "cancel", value: "cancel"
                }
            ]
        }
    ]
}