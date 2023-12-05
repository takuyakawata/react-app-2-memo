import { useState } from 'react'
import { AcButton } from "./components/AcButton";
import { SeatMap } from "./components/SeatMap";
import { StudentList } from "./components/StudentList";
import { SwapSeats } from "./components/SwapSeats";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {

  // 席の初期データ
  const initialSeats = [
    { id: 1, studentName: '学生A' },
    { id: 2, studentName: '学生B' },
    // 他の席のデータ...
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
      <h1>hello world</h1>


    
    </>
  );
};

export default App
