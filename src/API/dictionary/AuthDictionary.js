const AuthDictionary = {
  emailLogin: () => 'auth/login',
  forgotPassword: () => 'send-link',
  registerPlayer: () => 'auth/register',
  socialLogin: () => 'social-login',
  editprofile: () => 'user/editprofile',
  changePassword: () => 'profile/password',
  resetPassword: () => 'reset-password',
  mobileLogin: () => '/user/login-mobile',
  resendRegisterOTP: () => 'resend-otp',
  emailOtp: () => 'email-otp',
  verifyEmailOtp: () => 'email-otp-verify',
  profileVerify: () => 'profile/verify',
  sendOtp: () => 'send-otp',
  checkEligibility: () => 'eligibility',
  resendOtp: () => 'resend-otp',
  verifyOtp: () => 'verify-otp',
  checkCountry: () => 'country'
};

export default AuthDictionary;
