import ButtonElement from '../components/ButtonElement';

function Home() {

    return (
        <div className='container-fluid d-flex justify-content-center flex-column text-center vh-100'>
            <h1>Test App Students</h1>
            <span>Created By : <strong>Michele Porcaro | 2023</strong></span>
            <ButtonElement
                text='Vai su Students'
                url='/students/'
                bgcolor='rgb(127, 255, 185)'
            />
        </div>
    )

}

export default Home;