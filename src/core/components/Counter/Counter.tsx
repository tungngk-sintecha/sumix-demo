interface CounterProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  className?: string;
}

const Counter: React.FC<CounterProps> = ({
  value,
  onChange,
  min = 1,
  className = "",
}) => {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    onChange(value + 1);
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        type="button"
        onClick={handleDecrement}
        className="px-2 py-1 border rounded text-gray-700 hover:bg-gray-100"
      >
        −
      </button>

      <span className="min-w-[24px] text-center">{value}</span>

      <button
        type="button"
        onClick={handleIncrement}
        className="px-2 py-1 border rounded text-gray-700 hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
