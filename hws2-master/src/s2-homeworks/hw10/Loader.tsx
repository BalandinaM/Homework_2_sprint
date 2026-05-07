import s from './Loader.module.css'
import loaderImage from './loader.svg'

export const Loader = () => {
  return (
    <img
      src={loaderImage}
      alt="Loading..."
      className={s.loader}
      style={{ width: '50px', height: '50px' }}
    />
  )
}
