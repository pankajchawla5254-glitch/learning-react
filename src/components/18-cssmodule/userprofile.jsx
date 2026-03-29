import styles from "./userprofile.module.css";
function UserProfile() {
    return (
        <div>
            <div className={styles.card}>
                <img className={styles.img} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                <div className={styles.textWrap}>
                    <h4>Pankaj kumar</h4>
                    <p>junior software develper</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;