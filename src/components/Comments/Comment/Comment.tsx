import { FC } from "react"
import styles from "./Comment.module.css"

const Comment: FC<any> = ({ comment }) => {


    console.log(comment);


    return (
        <div className={styles.user}>
            <div className={styles.userPhoto}>
                <img alt="avatar" src="" />
            </div>
            <div className={styles.commentBox}>
                <div className={styles.userInfo}>
                    <p>{ }</p>
                    <span>date</span>
                </div>
                <div className={styles.userComment}>
                    <p>comment</p>
                </div>
                <a className={styles.replyBtn} href="#">Reply</a>
            </div>
        </div>
    )
}

export default Comment
