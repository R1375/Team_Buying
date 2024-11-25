
import { FC, useState } from 'react';
import styles from './Review.module.css';
import cross from '/assets/Cross_item.png'
import { useNavigate } from 'react-router-dom';

interface ReviewProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReviewLogin: FC<ReviewProps> = ({ isOpen, onClose}) => {
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleRating = (index: number) => {
        setRating(index + 1); // 設定選擇的評分，index + 1 表示從1開始的星星數量
    };

    const handleConfirm = () => {
        // 在点击确认后关闭当前 modal
        onClose();
        // 使用 navigate 导航回到主页面
        navigate('/');
    };
    return (
        <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={onClose}>
                <img className={styles.closeButton} src={cross}/>
            </button>
            <div className={styles.wrapper}>
            <h2 className={styles.title}>Faker's Review</h2>
            <p className={styles.subtitle}>TaoHua 's TeamBuying</p>
            <div className={styles.stars}>
                {Array(5).fill(0).map((_, index) => (
                    <span
                    key={index}
                    className={index < rating ? styles.filledStar : styles.emptyStar}
                    onClick={() => handleRating(index)}
                    >
                    ★
                    </span>
                ))}
            </div>
            <textarea
                className={styles.textarea}
                placeholder="Review"
                />
            {/* <button type='submit' className={styles.confirmButton}>Confirm</button> */}
            <button type='submit' className={styles.confirmButton} onClick={handleConfirm}>
                        Confirm
                    </button>
            </div>
            </div>
        </div>
    );
    };

export default ReviewLogin;
