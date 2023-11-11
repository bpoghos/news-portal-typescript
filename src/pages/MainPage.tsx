import React, { useState } from 'react'
import NewsList from '../components/NewsList'
import { NewsListProps } from '../components/NewsList/NewsList.interface'
import Modal from 'components/Modal'

const MainPage: React.FC<NewsListProps> = ({ news }) => {

  const [ismodal, setIsModal] = useState<boolean>(false)

  const handleModal = () => {
    setIsModal(true)
  }


  return (
    <div>
      <h1>Main Page</h1>
      <NewsList news={news} />
      <button onClick={handleModal}>Modal</button>
      {
        ismodal ? <Modal /> : null
      }
    </div>
  )
}

export default MainPage