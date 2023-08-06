import { atom } from "recoil"

const initialState = {
  name: "",
  dob: "",
  fbn: "",
  email: "",
  mobileNumber: "",
  password: "",
  reEnterpassword: "",
  aadharPassword: "",
  loggedIn: false,
}

export const userState = atom({
  key: "userState", // unique ID (with respect to other atoms/selectors)
  default: initialState, // default value (aka initial value)
})
