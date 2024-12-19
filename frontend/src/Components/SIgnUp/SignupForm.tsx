import { Link, useNavigate } from 'react-router-dom';
import styles from './SignUpForm.module.css';
import axios from 'axios';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import PasswordEye from '../../utils/PasswordEye';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFormData,
  setIsShown,
  setErrors,
  Data,
  createUser,
} from '../../Pages/Auth/AuthSlice';
import { AppDispatch, RootState } from '../../store';

function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { formData, isShown, errors, status } = useSelector(
    (state: RootState) => state.auth
  );

  const changePasswordType = () => {
    dispatch(setIsShown(!isShown));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    e.preventDefault();
    dispatch(
      setFormData({
        ...formData,
        [type]: e.target.value,
      })
    );
  };

  const getErrors = (data: Data) => {
    const errors: { field: string; message: string }[] = [];

    if (!data.name) {
      errors.push({ field: 'name', message: 'Name required' });
    } else if (data.name.length < 5) {
      errors.push({
        field: 'name',
        message: 'Name must be at least 5 characters',
      });
    }
    if (!data.username) {
      errors.push({ field: 'username', message: 'Username required' });
    } else if (data.username.length < 5) {
      errors.push({
        field: 'username',
        message: 'Username must be at least 5 characters',
      });
    }

    if (!data.email) {
      errors.push({ field: 'email', message: 'Email required' });
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      errors.push({ field: 'email', message: 'Invalid email' });
    }
    if (!data.password) {
      errors.push({ field: 'password', message: 'Password required' });
    } else {
      if (data.password.length < 8) {
        errors.push({
          field: 'password',
          message: 'Password must be at least 8 characters',
        });
      }
      if (!/[A-Z]/.test(data.password)) {
        errors.push({
          field: 'password',
          message: 'Password must contain an uppercase letter',
        });
      }
      if (!/[0-9]/.test(data.password)) {
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
    const errors = getErrors(formData);
    dispatch(setErrors(errors));

    try {
      if (errors.length === 0) {
        const res = await dispatch(
          createUser({
            url: '/users/signup',
            data: formData,
          })
        ).unwrap();

        dispatch(
          setFormData({
            username: '',
            name: '',
            email: '',
            password: '',
          })
        );
        if (res) {
          navigate('/');
        }
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  const getErrorMessage = (field: string) =>
    errors.find((error) => error.field === field)?.message;

  return (
    <div className={styles.signuppage}>
      <div className="w-[90%] px-3 py-4 flex flex-col rounded-lg gap-6">
        <div className="w-[100%]">
          <p className="text-center font-bold text-3xl mb-5">Sign Up </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-10 justify-center align-middle">
            <div className="w-[100%] flex flex-col gap-6">
              <div className={styles.inputsection}>
                <TextField
                  id="outlined-basic"
                  type="text"
                  label="Username"
                  variant="outlined"
                  value={formData.username}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onChange(e, 'username')
                  }
                />
                {getErrorMessage('username') && (
                  <p className={styles.errorMessage}>
                    {getErrorMessage('username')}
                  </p>
                )}
              </div>
              <div className={styles.inputsection}>
                <TextField
                  id="outlined-basic"
                  type="text"
                  label="Name"
                  variant="outlined"
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onChange(e, 'name')
                  }
                />
                {getErrorMessage('name') && (
                  <p className={styles.errorMessage}>
                    {getErrorMessage('name')}
                  </p>
                )}
              </div>
              <div className={styles.inputsection}>
                <TextField
                  id="outlined-basic"
                  type="email"
                  label="Email"
                  variant="outlined"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onChange(e, 'email')
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
                    value={formData.password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onChange(e, 'password')
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
            <LoadingButton
              size="small"
              loading={status === 'pending'}
              loadingIndicator="Loading..."
              variant="contained"
              type="submit"
            >
              Sign up
            </LoadingButton>
            <div>
              <p className="mt-[-20px]">
                Already have an account?
                <Link to="/" className="text-blue-700">
                  SignIn
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
