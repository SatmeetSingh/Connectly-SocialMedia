import styles from './EditProfile.module.css';
import { RxCross2 } from 'react-icons/rx';
import { GoCheck } from 'react-icons/go';
import { Link, useNavigate } from 'react-router-dom';
import UploadPhoto from './UploadPhoto';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useEffect } from 'react';
import { fetchData } from '../../Pages/HomePage/HomeSlice';
import {
  setUpdateData,
  UpdateData,
  UpdatedData,
} from '../../Pages/AppLayout/layoutSlice';
import { responsiveFontSizes } from '@mui/material';

export default function EditProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { updateData } = useSelector((state: RootState) => state.app);
  const { userData, status } = useSelector((state: RootState) => state.home);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    dispatch(fetchData({ url: '/users', userId: `${userId}` }));
  }, [dispatch, userId]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    dispatch(setUpdateData({ name, value }));
  };

  useEffect(() => {
    console.log(updateData); // Check if the state is updated after dispatch
  }, [updateData]);

  const handleClick = async () => {
    try {
      const response = await dispatch(
        UpdateData({
          url: '/users/update',
          userId: `${userId}`,
          data: updateData,
        })
      ).unwrap();
      console.log(response.user);
      if (response) {
        // window.history.back();
        navigate(-1);
      }
    } catch (error) {}
  };

  return (
    <div className={styles.EditProfile}>
      <div>
        <div className={styles.top}>
          <Link to="#" onClick={() => window.history.back()}>
            <RxCross2 size={30} />
          </Link>
          <p>Edit Profile</p>
          <Link to="#" onClick={handleClick}>
            <GoCheck size={30} color="blue" />
          </Link>
        </div>
      </div>
      <div className={styles.imageSection}>
        <img
          src="defaultImage.png"
          alt="profile"
          className={styles.profilePicture}
        />
        <p className="text-base font-semibold text-blue-600 mr-4">
          <UploadPhoto />
        </p>
      </div>
      <nav className="w-[95%] flex flex-col gap-5 mt-5">
        <input
          type="text"
          name="name"
          className={styles.input}
          placeholder="Name"
          value={updateData.Name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          className={styles.input}
          placeholder="Username"
          value={updateData.username}
          onChange={handleChange}
        />
        <textarea
          name="bio"
          className={styles.input}
          placeholder="Bio"
          value={updateData.bio}
          onChange={handleChange}
        />
        <select name="gender" value={userData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </nav>
      <div className="mt-3">
        <Link to="" className="text-blue-600">
          Add Link
        </Link>
      </div>
    </div>
  );
}
