import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import styles from './buttonFavorite.module.scss';

const ButtonFavorite = ({ onClick,favorite }) => {
    return (
        <button
            type="button"
            className={favorite ? styles.btn_favorite_active: styles.btn_favorite}
      onClick={onClick}
    >
      {favorite ? (
        <AiFillHeart size={18}></AiFillHeart>
      ) : (
        <AiOutlineHeart size={18}></AiOutlineHeart>
      )}
    </button>
  );
};

export default ButtonFavorite;
//
