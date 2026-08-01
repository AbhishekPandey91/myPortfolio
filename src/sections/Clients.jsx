import { achievements } from '../constants/index.js';

const getBadgeStyle = (type) => {
  switch (type) {
    case 'emerald':
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
    case 'amber':
    case 'gold':
      return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
    case 'purple':
      return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
    case 'cyan':
      return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
    default:
      return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
  }
};

const getBadgeIcon = (badge) => {
  if (badge.includes('Champion') || badge.includes('Winner')) {
    return (
      <svg className="w-4 h-4 text-amber-400 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  if (badge.includes('Podium')) {
    return (
      <svg className="w-4 h-4 text-slate-300 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 011.342.447l1 2a1 1 0 01-.447 1.342l-1.442.721.282.846A1 1 0 0117.75 11h-1.07a8.002 8.002 0 01-13.36 0H2.25a1 1 0 01-.98-1.191l.282-.846-1.442-.721a1 1 0 01-.447-1.342l1-2a1 1 0 011.342-.447l1.599.8L8 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4 text-cyan-400 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
};

const Clients = () => {
  return (
    <section className="c-space my-20" id="achievements">
      <div className="w-full">
        <p className="head-text">Achievements & Recognition</p>
        <p className="text-gray_gradient text-lg mt-2">
          Hackathon championships, national selections, competitive programming honors, and certifications.
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
          {achievements.map((item) => (
            <div
              key={`achievement-${item.id}`}
              className="bg-black-200 border border-black-300 rounded-xl p-6 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black-200">
              <div>
                <div className="flex justify-between items-center gap-2 mb-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getBadgeStyle(item.type)} flex items-center`}>
                    {getBadgeIcon(item.badge)}
                    {item.badge}
                  </span>
                  <span className="text-xs text-neutral-400 font-generalsans">{item.date}</span>
                </div>

                <h4 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-amber-400/90 text-sm font-semibold mt-1 mb-3">
                  {item.award}
                </p>

                <p className="text-neutral-300 text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-neutral-400 mt-6 pt-4 border-t border-black-300/60">
                <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h5m-5 0V7m0 0h-2m2 0h2" />
                </svg>
                <span>{item.organization}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
