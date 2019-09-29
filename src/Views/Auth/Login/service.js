export function login({ user, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === 'shaadi' && password == '123') {
        resolve(validCredentialResponse);
        return;
      }
      reject(invalidCredentialResponse)
    }, 1000);
  })

}

const validCredentialResponse = {
  success: true,
  data: {
    user: 'shaadi', loggedIn: true
  }
}

const invalidCredentialResponse = {
  success: false,
  message: 'Wrong User/Password'
}