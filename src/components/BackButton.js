import { Link } from 'react-router-dom';

function BackButton() {
    return (
        <>
        <Link to="/" className='backBtn'>Back To Dashboard</Link>
        </>
    );
}

export default BackButton;