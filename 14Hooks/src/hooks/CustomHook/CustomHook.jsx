import useFetch from './useFetch';

// Custom Hook
// Fetching data from an API
function CustomHook() {
    const userData = useFetch('https://jsonplaceholder.typicode.com/users');

    return (
        <>
            {userData.map((res) => {
                return (
                    <h4 key={res.id}>
                        {res.id}. {res.name}
                    </h4>
                );
            })}
        </>
    );
}

export default CustomHook;
