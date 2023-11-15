import { FC } from "react"
import styles from "./Comments.module.css"
import Comment from "./Comment/Comment"

const Comments: FC<any> = ({ news }) => {




    return (
        <div className={styles.commentsComponent}>
            <h2>Comments</h2>
            {
                news.map((n: any) => {
                    return <Comment key={n.id} comment={n.comments} />
                })
            }
        </div>
    )
}

export default Comments
