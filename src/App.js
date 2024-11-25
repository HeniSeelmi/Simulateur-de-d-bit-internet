import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { EmployeeProvider } from './components/EmployeeContext';

import MainContent from './components/MainContent';
import Interface1 from './components/Residentiel/Interface1';
import Interface2 from './components/Residentiel/Interface2';
import Interface3 from './components/Residentiel/Interface3';
import Interface4 from './components/Residentiel/Interface4';
import Interface5 from './components/Residentiel/Interface5';
import Interface6 from './components/Residentiel/Interface6';
import Interface7 from './components/Residentiel/Interface7';
import Interface8 from './components/Residentiel/Interface8';
import Ife from './components/Entreprise/Ife';
import Ife2 from './components/Entreprise/Ife2';
import Ifee3 from './components/Entreprise/Ifee3';
import Ife4 from './components/Entreprise/Ife4';
import Ife5 from './components/Entreprise/Ife5';
import Ife6 from './components/Entreprise/Ife6';

function App() {
  const [accumulatedSpeed, setAccumulatedSpeed] = useState(0); // State pour le débit accumulé
  const [previousLocalEmployeeCount, setPreviousLocalEmployeeCount] = useState(0); // State pour previousLocalEmployeeCount

  const navigate = useNavigate();

  return (
    <div>
      <EmployeeProvider>
        <Routes>
          <Route path="/" element={<MainContent onNavigate={navigate} />} />
          
          {/* Résidentiel */}
          <Route path="/Residentiel/Interface1" element={<Interface1 accumulatedSpeed={accumulatedSpeed} setAccumulatedSpeed={setAccumulatedSpeed} onNavigate={navigate} />} />
          <Route path="/Residentiel/Interface2" element={<Interface2 accumulatedSpeed={accumulatedSpeed} setAccumulatedSpeed={setAccumulatedSpeed} />} />
          <Route path="/Residentiel/Interface3" element={<Interface3 accumulatedSpeed={accumulatedSpeed} setAccumulatedSpeed={setAccumulatedSpeed} />} />
          <Route path="/Residentiel/Interface4" element={<Interface4 accumulatedSpeed={accumulatedSpeed} setAccumulatedSpeed={setAccumulatedSpeed} />} />
          <Route path="/Residentiel/Interface5" element={<Interface5 accumulatedSpeed={accumulatedSpeed} setAccumulatedSpeed={setAccumulatedSpeed} />} />
          <Route path="/Residentiel/Interface6" element={<Interface6 accumulatedSpeed={accumulatedSpeed} setAccumulatedSpeed={setAccumulatedSpeed} />} />
          <Route path="/Residentiel/Interface7" element={<Interface7 accumulatedSpeed={accumulatedSpeed} setAccumulatedSpeed={setAccumulatedSpeed} />} />
          <Route path="/Residentiel/Interface8" element={<Interface8 accumulatedSpeed={accumulatedSpeed} setAccumulatedSpeed={setAccumulatedSpeed} />} />

          {/* Entreprise */}
          <Route path="/Entreprise/Ife" element={<Ife onNavigate={navigate}/>} />
          <Route path="/Entreprise/Ife2" element={<Ife2   previousLocalEmployeeCount={previousLocalEmployeeCount} setPreviousLocalEmployeeCount={setPreviousLocalEmployeeCount} accumulatedSpeed={accumulatedSpeed} setAccumulatedSpeed={setAccumulatedSpeed} />} />
          <Route path="/Entreprise/Ifee3" element={<Ifee3  previousLocalEmployeeCount={previousLocalEmployeeCount} setPreviousLocalEmployeeCount={setPreviousLocalEmployeeCount} accumulatedSpeed={accumulatedSpeed} setAccumulatedSpeed={setAccumulatedSpeed} />} />
          <Route path="/Entreprise/Ife4" element={<Ife4  previousLocalEmployeeCount={previousLocalEmployeeCount} setPreviousLocalEmployeeCount={setPreviousLocalEmployeeCount} accumulatedSpeed={accumulatedSpeed} setAccumulatedSpeed={setAccumulatedSpeed}/>} />
          <Route path="/Entreprise/Ife5" element={<Ife5   previousLocalEmployeeCount={previousLocalEmployeeCount} setPreviousLocalEmployeeCount={setPreviousLocalEmployeeCount} accumulatedSpeed={accumulatedSpeed} setAccumulatedSpeed={setAccumulatedSpeed} />} />
          <Route path="/Entreprise/Ife6" element={<Ife6  accumulatedSpeed={accumulatedSpeed} setAccumulatedSpeed={setAccumulatedSpeed} />} />
        </Routes>
      </EmployeeProvider>
    </div>
  );
}

export default App;
