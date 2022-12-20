
import UAuth from '@uauth/js'

const uauth = new UAuth({
    clientID: "7e848bbc-0aff-4a54-bd81-1b6abd338b69",
    redirectUri: "http://127.0.0.1:5501/login.html",
    scope: "openid wallet"
})

  
window.login = async () => {
    try {
      const authorization = await uauth.loginWithPopup()
   
      console.log(authorization)
    } catch (error) {
      console.error(error)
    }
}

  
window.logout = async () => {
    await uauth.logout()
    console.log('Logged out with Unstoppable')
}  