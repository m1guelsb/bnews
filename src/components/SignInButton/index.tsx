import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import Img from 'next/image';

import { signIn, signOut, useSession } from 'next-auth/client';

import styles from './styles.module.scss';

export function SignInButton() {
  const [session] = useSession();
  const userData = {
    name : session?.user.name,
    email : session?.user.email,
    avatar : session?.user.image,
  }

  function logOut() {
    console.log(window.confirm)
    const confirmLogOut = window.confirm('Are you sure that you want to logout?')
    if (confirmLogOut === true) {
      signOut();
    }
  }
  
  return session ? (
    <button 
      type="button"
      className={styles.signInButton}
      onClick={()=> logOut()}
    >
      <div className={styles.userAvatarContainer}>
        <Img
          src={userData.avatar}
          alt={`${userData.name}avatar`}
          height="30px"
          width="30px"
          className={styles.userAvatar}
        />
      </div>
      {userData.name}
      <FiX color="lightgrey" className={styles.closeIcon}/>
    </button>
  ) : (
    <button 
      type="button"
      className={styles.signInButton}
      onClick={()=> signIn('github')}
    >
      <FaGithub color="white"/>
      Sign in with Github
    </button>
  );

}