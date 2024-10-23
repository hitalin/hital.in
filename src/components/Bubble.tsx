import { css } from '../../styled-system/css';

const bubbleStyle = css({
  position: 'absolute',
  zIndex: 5,
  backgroundColor: 'var(--wave-color)',
  borderRadius: '50%',
  opacity: 0.5,
  animation: 'floatingBubble 10s linear infinite',
});

const Bubble = () => {
  return (
    <div>
      {Array.from({ length: 15 }).map((_, index) => {
        const uniqueKey = `bubble-${Date.now()}-${index}`;
        const rightPosition = `${Math.random() * 100}%`;
        const animationDelay = `${Math.random() * 10}s`;
        const bottomPosition = `${Math.random() * 100 + 50}px`;
        const size = `${Math.random() * 8 + 2}px`;

        return (
          <div
            key={uniqueKey}
            className={bubbleStyle}
            style={{
              right: rightPosition,
              animationDelay: animationDelay,
              bottom: bottomPosition,
              width: size,
              height: size,
            }}
          />
        );
      })}
    </div>
  );
};

export default Bubble;