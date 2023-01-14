import s from './UserCard.module.scss';
import DiscordIco from '../../ui/icons/DiscordIco';
import GitHubIco from '../../ui/icons/GitHubIco';
import CardAvatar from '../../../assets/images/cardAvatar.png';

const UserCard = () => {
  const user = {
    'name': 'Rono Skeen',
    'rep': '15',
    'years': '20',
    'discord': 'non4m3#3784',
    'github': 'non4m3'
  }

  return (
    <div className={s.userCardBorder}>
      <div className={s.userCard}>
        <div className={s.userCardInfoTop}>
          <div className={s.userCardInfoTopImg}>
            <img src={CardAvatar} alt="avatar" />
          </div>
          <div className={s.userCardInfoTopTextBorder}>
            <div className={s.userCardInfoTopText}>
              <div className={s.userCardInfoTopTextName}>
                <p>{user.name}</p>
                <p>{user.years} years old</p>
                <div className={s.userCardInfoTopTextReputation}>{'+' + user.rep}</div>
              </div>
              <div className={s.userCardInfoContacts}>
                <div className={s.userCardInfoContactsItem}>
                  <DiscordIco />
                  <p>{user.discord}</p>
                </div>
                <div className={s.userCardInfoContactsItem}>
                  <GitHubIco />
                  <p>{user.github}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.userCardSep}></div>
        <div className={s.userCardInfoBottom}>
          <p className={s.userCardInfoBottomItem}>Node.JS, React</p>
          <p className={s.userCardInfoBottomItem}>6 month experience</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
