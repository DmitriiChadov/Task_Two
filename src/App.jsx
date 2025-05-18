import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const [steps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const handlePrev = () => {
		if (activeIndex > 0) {
			setActiveIndex(activeIndex - 1);
		}
	};
	const handleNext = () => {
		if (activeIndex < steps.length - 1) {
			setActiveIndex(activeIndex + 1);
		} else {
			handleReset();
		}
	};
	const handleReset = () => {
		setActiveIndex(0);
	};

	const currentStep = data[activeIndex];
	const firstStep = activeIndex === 0;
	const lastStep = activeIndex === data.length - 1;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						<h2>{currentStep.title}</h2>
						<p>{currentStep.content}</p>
					</div>
					<ul className={styles['steps-list']}>
						{steps.map((step, index) => (
							<li
								key={index}
								className={`${styles['steps-item']} ${
									index <= activeIndex ? styles.done : ''
								} ${index === activeIndex ? styles.active : ''}`}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => setActiveIndex(index)}
								>
									{index + 1}
								</button>
								Шаг {index + 1}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={handlePrev}
							disabled={firstStep}
						>
							Назад
						</button>
						<button className={styles.button} onClick={handleNext}>
							{lastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
