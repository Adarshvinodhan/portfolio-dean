import WorkSlides from "./WorkSlides";
import ResearchCards from "./ResearchSlides";
import AnnouncementsCards from "./AnnouncementSlides";

const CardsSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
          Highlights
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex-1 flex justify-center">
            <WorkSlides />
          </div>
          <div className="flex-1 flex justify-center">
            <ResearchCards />
          </div>
          <div className="flex-1 flex justify-center">
            <AnnouncementsCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
