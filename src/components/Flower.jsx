function Flower() {
  const name = 'חמנייה';
  const petalColor = 'gold';
  const centerColor = 'saddlebrown';

  const handleClick = () => {
    alert(`אני פרח מסוג ${name}`);
  };

  const petals = [0, 1, 2, 3, 4, 5].map((i) => (
    <div
      key={i}
      style={{
        position: 'absolute',
        width: '30px',
        height: '55px',
        borderRadius: '50%',
        top: '50%',
        left: '50%',
        backgroundColor: petalColor,
        transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-30px)`,
      }}
    />
  ));

  return (
    <div
      onClick={handleClick}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '20px',
        cursor: 'pointer',
      }}
    >
      {/* the flower drawing */}
      <div style={{ position: 'relative', width: '140px', height: '140px' }}>
        {petals}
        <div
          style={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: centerColor,
          }}
        />
      </div>

      {/* the flower details */}
      <p
        style={{
          color: centerColor,
          backgroundColor: petalColor,
          padding: '8px 15px',
          borderRadius: '10px',
          fontWeight: 'bold',
        }}
      >
        {name} | עלי כותרת: {petalColor} | עלה מרכזי: {centerColor}
      </p>
    </div>
  );
}

export default Flower;