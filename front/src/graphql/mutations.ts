export const register = `
mutation Register($userData: UserInputRegisterType!) {
  register(userData: $userData) {
    error {
      field
      message
    }
    user {
      id
      userName
      email
    }
  }
}
`;
export const login = `
mutation Login($loginOptions: UserInputLoginType!) {
  login(loginOptions: $loginOptions) {
    error {
      field
      message
    }
    user {
      email
      id
      userName
    }
  }
}
`;
