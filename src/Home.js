import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
function Home() {
    const [id, setId] = useState(1);
    const history = useHistory();
    const _handleClick = () => {
        // history.push(`/${id}`)
    }
    return (
        <>
            <input

            >
            </input>
            <Link
                to={`/home/${1}`}
                onClick={_handleClick}
            >Join</Link>
        </>
    );
}

export default Home;
