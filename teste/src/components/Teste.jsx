import { Outlet, Link } from 'react-router-dom';

export default function Teste() {
    return (
        <>
            <h1>Teste</h1>
            <button className='botao'>
                <Link to="/fernanda">Fernanda</Link>
            </button>
        </>
    )
}