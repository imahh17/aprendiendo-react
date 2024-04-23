import { useState, useEffect } from 'react'

const CAT_IMAGE_HOST = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&fontSize=50&fontColor=%23fff&json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id } = response
        const url = `/cat/${_id}/says/${threeFirstWords}?size=50&fontSize=50&fontColor=%23fff`
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl: `${CAT_IMAGE_HOST}${imageUrl}` }
}
