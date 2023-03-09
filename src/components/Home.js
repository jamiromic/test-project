import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {

    return (
        <div>
            <Link className='return_students' to='/students/'>Vai su Students</Link>
            <main>
                <h1>Test App Students</h1>
                <span>Created By : <strong>Michele Porcaro | 2023</strong></span>
            </main>
        </div>
    )

}

export default Home;