import { Link } from 'react-router-dom';

const Card = ({ id, name, url, description, imageURL }) => {
  return (
    <div className="rounded-xl bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 p-6 sm:flex sm:items-center sm:gap-6 shadow-lg text-gray-900">
      {/* Image */}
      <img
        className="mx-auto mb-4 h-24 w-24 rounded-full object-cover sm:mb-0 sm:mx-0 border-4 border-white"
        src={imageURL}
        alt={name}
      />

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold">{name}</h2>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline hover:text-gray-800"
        >
          {url}
        </a>
        <p className="mt-2 text-sm">{description}</p>
      </div>

      {/* Edit Button */}
      <Link to={`/edit/${id}`}>
        <button className="mt-4 rounded bg-white px-5 py-2 text-sm font-semibold text-orange-600 shadow-md transition hover:bg-orange-100 active:bg-orange-200 sm:mt-0">
          Edit
        </button>
      </Link>
    </div>
  );
};

export default Card;
