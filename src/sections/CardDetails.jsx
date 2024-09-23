import { useLocation } from 'react-router-dom';
import React from 'react';

export default function CardDetails() {
  const location = useLocation();
  const cardData = location.state?.data; // البيانات التي تم تمريرها من ProjectsDetails

  if (!cardData) {
    return <div>No data available!</div>;
  }

  return (
    <div className='p-5 h-[100vh] mx-28 mt-16'>
      <h1 className='text-3xl text-white'>{cardData.title}</h1>
      <img src={cardData.Image.url} alt={cardData.title} className='mt-4 w-[400px] h-[400px] rounded-lg' />
      <p className='mt-4 text-white'>{cardData.author}</p>
      <p className='mt-4 text-white'>{cardData.description}</p> {/* يمكنك إضافة أي تفاصيل أخرى هنا */}
    </div>
  );
}
