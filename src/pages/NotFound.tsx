import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
  <>
    <h1 className="mb-4 flex items-center animate-fade-in text-4xl font-semibold tracking-tight text-white">
      <span className="mr-3 text-accent">*</span>
      404
    </h1>

    <p className="animate-fade-in-up">
      nothing here.{" "}
      <Link to="/" className="text-accent hover:underline">
        go home
      </Link>
      .
    </p>
  </>
);

export default NotFound;
