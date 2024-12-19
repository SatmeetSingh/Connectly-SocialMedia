import { Link, useNavigate, useNavigation, useParams } from 'react-router-dom';
import LoginForm from '../../Components/login/LoginForm';
import Button from '../../utils/Button';
interface LoginPageProp {}

const LoginPage: React.FC<LoginPageProp> = () => {
  return (
    <div className="overflow-hidden flex justify-start h-[100%]">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
