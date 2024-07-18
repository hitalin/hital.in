import { css } from '../../styled-system/css';

const Bubble = () => {
  // Static styles for all bubbles
  const bubbleStyle = css({
    position: 'absolute',
    zIndex: 5,
    backgroundColor: 'var(--text-color)',
    borderRadius: '50%',
    width: '10px',
    height: '10px',
    opacity: 0.5,
    animation: 'floatingBubble 10s linear infinite',
  });

  return (
    <div>
      {Array.from({ length: 15 }).map((_, index) => {
        // Generate a unique key for each bubble
        const uniqueKey = `bubble-${Date.now()}-${index}`;
        // Calculate the right position for each bubble
        const rightPosition = `${Math.random() * 100}%`;
        // Random delay for each bubble's animation (0s to 5s)
        const animationDelay = `${Math.random() * 5}s`;
        // Random bottom start position (0px to 200px)
        const bottomPosition = `${Math.random() * 200}px`;

        return (
          <div
            key={uniqueKey}
            className={bubbleStyle}
            style={{
              right: rightPosition,
              animationDelay: animationDelay,
              bottom: bottomPosition
            }}
          />
        );
      })}
    </div>
  );
};

export default Bubble;