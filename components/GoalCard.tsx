import React from 'react';
import type { Goal } from '../types';

interface GoalCardProps {
  goal: Goal;
}

const GoalCard: React.FC<GoalCardProps> = ({ goal }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 ${goal.color} hover:-translate-y-1`}>
      <div className="p-6">
        <div className="flex items-start">
          <div className={`flex-shrink-0 p-3 rounded-full ${goal.color.replace('border', 'bg').replace('-500', '-100')}`}>
             {React.cloneElement(goal.icon, { className: `h-7 w-7 ${goal.color.replace('border', 'text').replace('-500', '-600')}` })}
          </div>
          <div className="ml-4">
            <h3 className="text-lg leading-6 font-bold text-gray-900">{goal.title}</h3>
            <p className="mt-2 text-base text-gray-600">{goal.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalCard;