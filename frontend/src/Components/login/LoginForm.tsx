import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './loginForm.module.css';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import FormControlLabel from '@mui/material/FormControlLabel';
import { TextField, Checkbox, FormControl } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import PasswordEye from '../../utils/PasswordEye';
import {
  setLoginData,
  setIsShown,
  LoginData,
  setLoading,
  setErrors,
  loginUser,
} from '../../Pages/Auth/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { errors, isShown, loginData, status } = useSelector(
    (state: RootState) => state.auth
  );
  const navigate = useNavigate();

  const changePasswordType = () => {
    dispatch(setIsShown(!isShown));
  };

  const onChange = (value: string, e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(
      setLoginData({
        ...loginData,
        [value]: e.target.value,
      })
    );
  };

  const getErrors = (data: LoginData) => {
    const errors: { field: string; message: string }[] = [];

    if (!data.Email) {
      errors.push({ field: 'email', message: 'Email required' });
    } else if (!/^\S+@\S+\.\S+$/.test(data.Email)) {
      errors.push({ field: 'email', message: 'Invalid email' });
    }
    if (!data.Password) {
      errors.push({ field: 'password', message: 'Password required' });
    } else {
      if (data.Password.length < 8) {
        errors.push({
          field: 'password',
          message: 'Password must be at least 8 characters',
        });
      }
      if (!/[A-Z]/.test(data.Password)) {
        errors.push({
          field: 'password',
          message: 'Password must contain an uppercase letter',
        });
      }
      if (!/[0-9]/.test(data.Password)) {
        errors.push({
          field: 'password',
          message: 'Password must contain a number',
        });
      }
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = getErrors(loginData);
    dispatch(setErrors(errors));

    try {
      if (errors.length === 0) {
        const response = await dispatch(
          loginUser({
            url: '/users/login',
            data: loginData,
          })
        ).unwrap();

        const userId = localStorage.getItem('userId');
        if (response) {
          navigate(`/${userId}`);
        }
        dispatch(
          setLoginData({
            Email: '',
            Password: '',
          })
        );
      } else {
        dispatch(
          setLoginData({
            Email: '',
            Password: '',
          })
        );
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const getErrorMessage = (field: string) => {
    return errors.find((error) => error.field === field)?.message;
  };

  return (
    <div className={styles.loginpage}>
      <div className="w-[90%] px-3 py-4 flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <p className="items-center font-semibold text-3xl mt-5  ">
            Login to your account
          </p>
          <p className="text-lg">Please enter your details</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 justify-center align-middle">
            <div className="w-[100%] flex flex-col gap-4">
              <div className={styles.inputsection}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  value={loginData.Email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onChange('Email', e)
                  }
                />
                {getErrorMessage('email') && (
                  <p className={styles.errorMessage}>
                    {getErrorMessage('email')}
                  </p>
                )}
              </div>
              <div className={styles.inputsection}>
                <div className="w-full relative">
                  <TextField
                    id="outlined-basic"
                    type={isShown ? 'text' : 'password'}
                    label="Password"
                    variant="outlined"
                    value={loginData.Password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onChange('Password', e)
                    }
                    className="w-full"
                  />
                  <PasswordEye
                    changePasswordType={changePasswordType}
                    isShown={isShown}
                  />
                </div>
                {getErrorMessage('password') && (
                  <p className={styles.errorMessage}>
                    {getErrorMessage('password')}
                  </p>
                )}
              </div>
            </div>

            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember Me"
            />
            <LoadingButton
              size="small"
              loading={status === 'pending'}
              loadingIndicator="Loading..."
              variant="contained"
              type="submit"
            >
              Login
            </LoadingButton>
            <div className="mt-[-10px] flex flex-col gap-3">
              <p>
                Don't have an account?
                <Link to="/signup" className="text-blue-700">
                  Sign up
                </Link>
              </p>
              <p className="self-center font-semibold">Forgot Password?</p>
            </div>
          </div>
        </form>
        <p className={`w-[100%] text-center ${styles.line}`}>or</p>
        <div className="w-[100%]">
          <LoadingButton
            size="small"
            loading={status === 'pending'}
            loadingIndicator="Loading…"
            variant="contained"
            className="w-full"
          >
            <FcGoogle size={20} />
            Login with Google
          </LoadingButton>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
