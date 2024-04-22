import { useCatImage } from '../hooks/useCatImage'

export function Otro () {
  const { imageUrl } = useCatImage({ fact: 'El cato loco' })

  return (
    <main>
      {imageUrl && <img src={imageUrl} alt='Image extracted from cataas.com using the first three words from this text: El cato loco' />}
    </main>

  )
}
