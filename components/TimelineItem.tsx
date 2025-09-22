import React from 'react';
import type { TimelineEvent } from '../types';

interface TimelineItemProps {
  event: TimelineEvent;
  isLast: boolean;
}

const CheckCircleIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const TimelineItem: React.FC<TimelineItemProps> = ({ event, isLast }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <div className="flex items-center justify-center w-8 h-8 bg-sky-500 rounded-full text-white font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
        </div>
        {!isLast && <div className="w-px h-full bg-gray-300 mt-2"></div>}
      </div>
      <div className="pb-10">
        <p className="text-sm font-semibold text-sky-600">{event.date}</p>
        <h4 className="text-xl font-bold text-gray-800 mt-1 mb-3">{event.title}</h4>
        <ul className="space-y-2">
          {event.tasks.map((task, index) => (
            <li key={index} className="flex items-start text-gray-600">
                <CheckCircleIcon />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;
