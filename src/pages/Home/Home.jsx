import MainPageTitle from 'components/mainPageTitle/mainPageTitle';
import { img_main } from "../../constants/constants";
import styles from './Home.module.scss';

const Home = () => {
  
  return (
    <div className={styles.container}>
      <MainPageTitle title={'Rent car'}></MainPageTitle>
      <div className={styles.wrap}>
        <div className={styles.wrap_text}>
          <h2>Welcome to our website!</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod rem
            est aliquid, nulla dolorem nam deserunt tempora, cumque inventore ea
            eveniet blanditiis officiis. Quibusdam ipsam aliquid numquam odio
            nulla beatae!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
            reiciendis aspernatur. Minus quo similique deleniti optio laudantium
            dicta consequuntur labore maiores quibusdam cumque dolorem, quam
            libero esse quae quaerat in!
          </p>
          <h2>Our servises:</h2>
          <ul className={styles.wrap_list}>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, minima.
            </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, et.
            </li>
          </ul>
        </div>
        <div className={styles.container_img}>
          <img src={img_main} alt="car" />
        </div>
      </div>
    </div>
  );
};

export default Home;