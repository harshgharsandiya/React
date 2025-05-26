const SearchInput = ({ value, onChange, placeHolder }) => {
    return (
    <input
        text="text"
        value={value}
        onChange={onChange}
        placeholder="placeHolder"
        className="p-2 border rounded w-full"
    />
    );
};

export default SearchInput;