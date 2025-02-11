import { Link } from 'react-router-dom';
import './NotF.css'
export default function NotFoundComp() {
    return (
      <>
        <div className="not-found-container">
          
          <p>Click below to visit the homepage:</p>
          <Link to="/">
            <button>Homepage</button>
          </Link>
        </div>
      </>
    );
  }