import Carousel from '@/Components/Carousel/Carousel'
import Main from '@/Components/Main/Main'
import React from 'react'

export default function Work() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Main>
      <Carousel/>
    </Main>
  )
}
