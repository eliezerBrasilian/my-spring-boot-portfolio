import Image from '../assets/images/jaden.webp';
import CircularImageStyles from '../modules/CircularImage.module.css';

function CircularImage() {
  return (
    <div className={CircularImageStyles.image_container}>
      <img src={Image} className={CircularImageStyles.circular_image} alt='' />
    </div>
  );
}

export { CircularImage };
