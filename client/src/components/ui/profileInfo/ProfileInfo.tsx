import s from './ProfileInfo.module.scss';
import userImg from '../../../assets/images/userPhoto.png';
import DiscordIco from '../icons/DiscordIco';
import GitHubIco from '../icons/GitHubIco';
import TelegramIco from '../icons/TelegramIco';

const ProfileInfo = () => {
  const user = {
    name: 'Albert Einstein',
    role: 'Fulltack developer',
    rep: '103',
    age: '20 years, 3 month, 7 days',
    onPlatform: '6 month, 3 days',
    livein: 'Netherlands, Rotterdam',
    languages: 'English, Russian',
  };

  const inviteToProject = () => {
    console.log('Invited to project')
  }

  const sendMessage = () => {
    console.log('Message sended')
  }


  return (
    <>
      <div className={s.wrapper}>
        <div className={s.profile_photo}>
          <img src={userImg} alt="photo" />
          <div className={s.user_status}>
            4h
          </div>
          <div className={s.user_status_dot}>

          </div>
        </div>
        <div className={s.profile_info}>
          <div className={s.profile_info_item}>
            <p>{user.name}</p>
            <span className={s.reputation}>{'+' + user.rep}</span>
          </div>
          <div className={s.profile_info_item}>
            <p>{user.role}</p>
          </div>
          <div className={s.profile_info_sep}>
            <p>BASIC INFORMATION</p>
          </div>
          <div className={s.profile_info_item}>
            <p>{'Age: ' + user.age}</p>
          </div>
          <div className={s.profile_info_item}>
            <p>{'On the platform:' + user.onPlatform}</p>
          </div>
          <div className={s.profile_info_item}>
            <p>{'Live in:' + user.livein}</p>
          </div>
          <div className={s.profile_info_item}>
            <p>{'Languages:' + user.languages}</p>
          </div>
          <div className={s.profile_info_sep}>
            <p>CONTACT INFORMATION</p>
          </div>
          <div className={s.profile_contact_item}>
            <DiscordIco/>
            <p>somellier:9999</p>
          </div>
          <div className={s.profile_contact_item}>
            <GitHubIco/>
            <p>somellier:9999</p>
          </div>
          <div className={s.profile_contact_item}>
            <TelegramIco/>
            <p>somellier:9999</p>
          </div>
          <div className={s.profile_info_sep}>
            <p>ACTIONS</p>
          </div>
          <div className={s.buttons}>
            <button className={s.btn_send_message} onClick={sendMessage}>
                SEND MESSAGE
            </button>
            <button className={s.btn_invite} onClick={inviteToProject}>
                INVITE TO PROJECT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
