import {Link} from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-center transform translate-y-full">
      <div className="relative inline-block">
        <h1 className="text-9xl font-bold text-gray-800 mb-4 relative z-10">
          <span className="text-white">404</span>
        </h1>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-red-500 opacity-50 rounded-full blur-md animate-pulse"></div>
      </div>
      <p className="text-xl text-white mb-4 font-play">Page not found</p>
      <Link to="/" className="bg-white p-2 rounded text-blue-950 font-play inline-block">
        Go Home
      </Link>
    </div>
  );
};
export default NotFoundPage;
