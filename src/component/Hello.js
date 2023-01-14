import { useState } from "react";

export default function Hello() {
    const [name, setName] = useState('Mike');

    // function changeName() {
    //     const newName = name === 'Mike' ? 'Jane' : 'Mike';
    //     setName(newName);
    // };

    return (
        <div>
            {/* <h1>state</h1>
            <h2>컴포넌트 속성값</h2> */}
            <h3 id='name'>{name}</h3>
            {/* <button onClick={changeName}>Change</button> */}
            <button onClick={() => {
                setName(name === 'Mike' ? 'Jane' : 'Mike'
                )
            }}>Change</button>
        </div>
    );
};

