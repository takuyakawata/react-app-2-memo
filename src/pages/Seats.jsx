export const Seats = () => {

    // 初期の座席の設定
const initialSeats = [
  { id: 1, studentName: '学生1' },
  { id: 2, studentName: '学生2' },
  { id: 3, studentName: '学生3' },
  { id: 4, studentName: '学生4' },
  { id: 5, studentName: '学生5' },
  { id: 6, studentName: '学生6' },
  { id: 7, studentName: '学生7' },
  { id: 8, studentName: '学生8' },
  { id: 9, studentName: '学生9' },
  { id: 10, studentName: '学生10' },
  { id: 11, studentName: '学生11' },
  { id: 12, studentName: '学生12' },
  { id: 13, studentName: '学生13' },
  { id: 14, studentName: '学生14' },
  { id: 15, studentName: '学生15' },
  { id: 16, studentName: '学生16' },
  { id: 17, studentName: '学生17' },
  { id: 18, studentName: '学生18' },
  { id: 19, studentName: '学生19' },
  { id: 20, studentName: '学生20' },
  { id: 21, studentName: '学生21' },
  { id: 22, studentName: '学生22' },
  { id: 23, studentName: '学生23' },
  { id: 24, studentName: '学生24' },
  { id: 25, studentName: '学生25' },
  { id: 26, studentName: '学生26' },
  { id: 27, studentName: '学生27' },
  { id: 28, studentName: '学生28' },
  { id: 29, studentName: '学生29' },
  { id: 30, studentName: '学生30' },
  { id: 31, studentName: '学生31' },
  { id: 32, studentName: '学生32' },
  { id: 33, studentName: '学生33' }
];

// 席の状態を管理する
const [seats, setSeats] = useState(initialSeats);

// 席をクリックした際の処理
const handleSeatClick = (seat) => {
    // 席をクリックした際の処理をここに書く
    console.log('Selected seat:', seat);

};

  return (
    <>
      <p>席替えの画面</p>
          <AcButton text="席替え" />

        <div>
            <SeatMap seats={seats} onSeatClick={aa} />
            {/* 席をクリックしたときの処理  */}
            <StudentList students={students} />
            {/* 席交換の処理 */}
            <SwapSeats onSwapClick={bb} />

            {/* その他のUIコンポーネント */}
            <AcButton text="ボタン"/>
      </div>
    </>
  );
};