import * as yup from "yup";
import axios from 'axios';
import config from './../../../config'


const API_URL = String(config.API_BACKEND)
const API_CLIENT = String(config.API_CLIENT);

export const SignupFormValidSchema = yup.object().shape({
    firstname : yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required().test('checkEmailUnique', 'Email already in use.',
     (email: string|undefined) => {
       //check  if email is exist in the database
       return new Promise ((resolve,reject)=>{
        axios.post(API_URL+'email/',{email: email}).then(res=>{
          //console.log(res.data.data.length);
          res.data.data.length === 0 ? resolve(true) : resolve(false)
        }).catch(()=>{
          console.log(API_CLIENT);
          alert('Server Down. Please contact us.');
          resolve(false)
          window.location.replace(API_CLIENT);
          
        })
       })
     }),
    password: yup.string().required().matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
    repassword : yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match')
  });