import React from 'react'
import styles from './NewsList.module.css'
import { NewsListProps } from './NewsList.interface'
import { NewsCardProps } from '../NewsCard/NewsCard.interface'
import NewsCard from '../NewsCard/NewsCard'




const NewsList: React.FC<NewsListProps> = ({ news }) => {



    return (
        <div className={styles.list}>
            {
                news.map((item: NewsCardProps) =>
                    <div key={item.id} className={styles.card}><NewsCard {...item} /></div>
                )
            }
        </div>
    )
}

export default NewsList
