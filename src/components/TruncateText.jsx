const TruncateText = ({ line = 2, children }) => {
  return (
    <div
      style={{
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: `${line}`,
        overflow: 'hidden'
      }}
    >
      {children}
    </div>
  );
};

export default TruncateText;
