import React from 'react';
import 'antd/dist/reset.css';
import { Routes, Route } from 'react-router-dom'
import FraudTransaction from '../components/pages/FraudTransaction'
import RecomendationEngine from '../components/pages/RecommendationEngine'


const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<FraudTransaction />} />
      <Route path='/fraud' element={<FraudTransaction />} />
      <Route path='/recommendation' element={<RecomendationEngine />} />
    </Routes>

  )
}

export default Router;
