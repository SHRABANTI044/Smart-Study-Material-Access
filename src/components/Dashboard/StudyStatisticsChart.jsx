import React, { useState } from 'react';

const dataWeek = [
  { day: 'SAT', hours: 3 },
  { day: 'SUN', hours: 6 },
  { day: 'MON', hours: 4.5 },
  { day: 'TUE', hours: 5 },
  { day: 'WED', hours: 8 },
  { day: 'THU', hours: 4 },
  { day: 'FRI', hours: 4 },
];

const dataMonth = [
  { day: 'Week 1', hours: 20 },
  { day: 'Week 2', hours: 25 },
  { day: 'Week 3', hours: 22 },
  { day: 'Week 4', hours: 28 },
];

const maxHoursWeek = Math.max(...dataWeek.map(d => d.hours));
const maxHoursMonth = Math.max(...dataMonth.map(d => d.hours));

const StudyStatisticsChart = () => {
  const [view, setView] = useState('week');

  const data = view === 'week' ? dataWeek : dataMonth;
  const maxHours = view === 'week' ? maxHoursWeek : maxHoursMonth;

return (
  <div>
    <div className="chart-header">
      <h3>STUDY STATISTICS</h3>
      <div className="view-toggle">
        <button
          className={view === 'week' ? 'active' : ''}
          onClick={() => setView('week')}
        >
          week
        </button>
        <button
          className={view === 'month' ? 'active' : ''}
          onClick={() => setView('month')}
        >
          month
        </button>
      </div>
    </div>
    <div className="bar-chart">
      {data.map((d, index) => {
        const barHeight = (d.hours / maxHours) * 100;
        return (
          <div key={index} className="bar-container">
            <div className="bar" style={{ height: `${barHeight}%` }} title={`${d.day}: ${d.hours} hours`}></div>
            <div className="bar-label">{d.day}</div>
          </div>
        );
      })}
    </div>
  </div>
);
};

export default StudyStatisticsChart;
