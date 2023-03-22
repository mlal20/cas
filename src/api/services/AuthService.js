import dictionary from "../dictionary";
import methods from "../methods";

const { auth } = dictionary;
const { get, post, patch } = methods;

const AuthService = {
  userEmailLoginService: (body) => {
    return post(auth.emailLogin(), body);
  },
  forgotPasswordService: (body) => {
    return post(auth.forgotPassword(), body);
  },
  userRegisterService: (body) => {
    return post(auth.registerPlayer(), body);
  },
  userSocialLogin: (body) => {
    return post(auth.socialLogin(), body);
  },
  userEditProfileService: (body) => {
    return post(auth.editprofile(), body);
  },
  changePasswordService: (body) => {
    return post(auth.changePassword(), body);
  },
  verifyOtpService: (body) => {
    return post(auth.verifyOtp(), body);
  },
  resetPasswordService: (body) => {
    return post(auth.resetPassword(), body);
  },
  userMobileLoginService: (body) => {
    return post(auth.mobileLogin(), body);
  },
  resendRegisterOTPService: (body) => {
    return post(auth.resendRegisterOTP(), body);
  },
  getEmailOtpService: (body) => {
    return post(auth.emailOtp(), body);
  },
  verifyEmailOtpService: (body) => {
    return post(auth.verifyEmailOtp(), body);
  },
  verifyProfileOtpService: (body) => {
    return patch(auth.profileVerify(), body);
  },
  sendOtp: (body) => {
    return post(auth.sendOtp(), body);
  },
  resendOtp: (body) => {
    return post(auth.resendOtp(), body);
  },
  verifyOtp: (body) => {
    return post(auth.verifyOtp(), body);
  },

  checkCountry: () => {
    return get(auth.checkCountry());
  },
};

export default AuthService;
