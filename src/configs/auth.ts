export default {
  meEndpoint: 'https://1l90myiar1.execute-api.us-east-1.amazonaws.com/prod/authMe',
  loginEndpoint: 'https://1l90myiar1.execute-api.us-east-1.amazonaws.com/prod/signIn',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
