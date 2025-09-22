import React from 'react';
import type { Goal, TimelineEvent } from './types';
import GoalCard from './components/GoalCard';
import TimelineItem from './components/TimelineItem';
import UsersIcon from './components/icons/UsersIcon';
import BriefcaseIcon from './components/icons/BriefcaseIcon';
import SparklesIcon from './components/icons/SparklesIcon';
import ServerStackIcon from './components/icons/ServerStackIcon';

const goals: Goal[] = [
  {
    id: 'goal-7',
    title: 'Goal 7 - Staff and Instructor Engagement',
    description: 'Foster a connected, inclusive, and resilient internal community through professional development, engagement initiatives and effective internal communications that promote collaboration, knowledge sharing, and professional growth among staff and instructors.',
    icon: <UsersIcon />,
    color: 'border-blue-500'
  },
  {
    id: 'goal-11',
    title: 'Goal 11 - Career and Curriculum',
    description: 'Improve learner engagement and program impact by expanding experiential learning strategies and authentic assessments, including employer-informed projects. Infuse career development resources and opportunities within the continuing education curriculum.',
    icon: <BriefcaseIcon />,
    color: 'border-emerald-500'
  },
  {
    id: 'goal-13',
    title: 'Goal 13 - Artificial Intelligence',
    description: 'Leverage AI technologies to enhance teaching practices, course design, and learner support by piloting the use of tools. (ex. Chatbot, Smart Course Planner)',
    icon: <SparklesIcon />,
    color: 'border-purple-500'
  },
  {
    id: 'goal-14',
    title: 'Goal 14 - Digital Systems and Infrastructure',
    description: 'Develop a future-ready digital infrastructure strategy that leverages AI where appropriate, that ensures a seamless, accessible and adaptable learner experience, supporting the growth of non-credit programming and enabling integration with emerging technologies and evolving learner needs. (ex. new D2L instance, new CMS)',
    icon: <ServerStackIcon />,
    color: 'border-orange-500'
  },
];

const timelineEvents: TimelineEvent[] = [
    {
        date: 'September–October',
        title: 'Objective Setting',
        tasks: [
            'Set S.M.A.R.T. objectives based on Chang School priorities and DES initiatives.',
            'Finalize objectives in consultation with employees, ensuring alignment with their role and responsibilities.',
            'Identify development opportunities to support performance and career growth.',
        ],
    },
    {
        date: 'November–December',
        title: 'Fall Check-in',
        tasks: [
            'Review progress, provide feedback, and coach on improving performance and effectiveness.',
            'Revise objectives if required.',
        ],
    },
    {
        date: 'March–April',
        title: 'Winter Check-in',
        tasks: [
            'Managers review progress, provide feedback, and coach on improving performance and effectiveness.',
            'Revise objectives if required.',
        ],
    },
    {
        date: 'July–August',
        title: 'Year-End Review',
        tasks: [
            'Comprehensive review of progress and outcomes against established objectives.'
        ],
    },
];


const App: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      <main className="max-w-5xl mx-auto p-4 sm:p-8 md:p-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <header className="p-8 sm:p-10 bg-gradient-to-r from-sky-600 to-sky-800 text-white">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Aligning Our Future: 2025-26 Priorities</h1>
            <p className="mt-2 text-lg sm:text-xl text-sky-200">An overview of our goals, objectives, and performance timeline.</p>
          </header>

          <div className="p-8 sm:p-10 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900">Hello team,</h2>
              <p className="mt-4 text-lg text-slate-700">
                Following up on The Chang School Priorities and Objectives for 2025-26, this document outlines our path forward.
              </p>
            </section>
            
            <div className="bg-sky-50 border-l-4 border-sky-400 p-6 rounded-r-lg">
                <h3 className="font-bold text-sky-800 text-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span>Meeting Announcement</span>
                </h3>
                <p className="mt-2 text-slate-700">
                    We will be meeting to review Chang Objectives for 2025-26 and DES Initiatives on <strong className="font-semibold">Thursday, October 9, from 9:15 – 10:00 am</strong>, on the 7th floor.
                </p>
            </div>

            <section>
                <h2 className="text-2xl font-semibold text-slate-900 border-b-2 border-slate-200 pb-2 mb-6">Our Core Focus Areas</h2>
                 <p className="mb-8 text-lg text-slate-700">
                    While our team contributes to all five school priorities, we will focus our efforts and make the greatest impact on the following goals:
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {goals.map((goal) => (
                        <GoalCard key={goal.id} goal={goal} />
                    ))}
                </div>
            </section>

            <section>
                 <h2 className="text-2xl font-semibold text-slate-900 border-b-2 border-slate-200 pb-2 mb-6">Performance Objectives Process</h2>
                <p className="text-lg text-slate-700 mb-4">
                    Managers will draft performance objectives for each employee in alignment with The Chang School’s goals and DES initiatives. Employees will have the opportunity to provide input before their objectives are finalized.
                </p>
                 <p className="text-lg text-slate-700 mb-6">
                   To support this process, managers will schedule individual meetings with their direct reports to discuss the objectives and complete the required forms.
                </p>
                <a 
                    href="https://docs.google.com/document/d/1emSrlXaBs62f0drZFEVBQWGudNyttBFD/edit" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-300"
                >
                    Access Performance Objective Form
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
            </section>
            
            <section>
                <h2 className="text-2xl font-semibold text-slate-900 border-b-2 border-slate-200 pb-2 mb-6">Timeline</h2>
                 <div className="mt-6">
                    {timelineEvents.map((event, index) => (
                        <TimelineItem key={index} event={event} isLast={index === timelineEvents.length - 1} />
                    ))}
                 </div>
            </section>

            <footer className="pt-8 border-t border-slate-200">
                 <p className="text-lg text-slate-700">
                    Thank you in advance for your engagement in this process as we work together to align our objectives with The Chang School’s priorities and strengthen our collective impact.
                 </p>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
