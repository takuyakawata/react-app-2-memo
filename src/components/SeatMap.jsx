export const SeatMap = ({ seats, onSeatClick }) => {

    return (
      //seats をもとに 座席を作成する
    <div className="seat-map">
      {seats.map((seat, index) => (
        <button key={index} onClick={() => onSeatClick(seat)}>
          {seat.studentName || '空席'}
        </button>
      ))}
    </div>
  );
};