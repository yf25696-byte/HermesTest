import React from 'react';

const Hero = () => (
  <section className="min-h-screen bg-sand-light p-6 md:p-12">
    <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl p-10 md:p-20 overflow-hidden relative">
      {/* 背景裝飾 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ocean-light rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
      
      <div className="relative z-10">
        <h1 className="text-6xl md:text-8xl font-black text-ocean-dark mb-6 tracking-tight">
          自由島嶼<br/><span className="text-sand-DEFAULT">Free Island</span>
        </h1>
        <p className="text-2xl text-slate-600 mb-10 max-w-xl leading-relaxed">
          東北角最友善的自潛教學。<br/>
          暖男教練帶領，給您峇里島般的自在與安全感。
        </p>
        <button className="bg-ocean-DEFAULT hover:bg-ocean-dark text-white font-bold py-5 px-12 rounded-full text-xl shadow-lg transition-transform hover:scale-105">
          立即展開探索
        </button>
      </div>
    </div>
  </section>
);

export default Hero;
