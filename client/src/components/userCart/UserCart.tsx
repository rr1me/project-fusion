import s from './UserCart.module.scss';
// import discordLogo from '../../assets/images/discord.svg';
// import GitHubLogo from '../../assets/images/discord.svg';


const UserCart = () => {
    const reputation = '15';
    return (
        <div className={s.userCart}>
            <div className={s.userCartInfoTop}>
                    <div className={s.userCartInfoTopImg}>
                        img
                    </div>
                    <div className={s.userCartInfoTopTextBorder}>
                        <div className={s.userCartInfoTopText}>
                            <div className={s.userCartInfoTopTextName}>
                                <p>
                                    Rono Skeen
                                </p>
                                <p>
                                    20 years old
                                </p>
                                <div className={s.userCartInfoTopTextReputation}>
                                    {'+' + reputation}
                                </div>  
                            </div> 
                            <div className={s.userCartInfoContacts}>
                                <div className={s.userCartInfoContactsItem}>
                                    <img src="" alt="" />
                                    <p>
                                        non4m3#3784
                                    </p>
                                </div>
                                <div>
                                    <img src="" alt="" />
                                    <p>
                                        non4m3
                                    </p>
                                </div>
                            </div>     
                        </div>
                    </div>
            </div>
            <div className={s.userCartInfoBottom}>
                
            </div>
        </div>
    )
};

export default UserCart