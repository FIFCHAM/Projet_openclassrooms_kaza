function Tags(params) {
    return (
        <div className="tag-container">
            {params.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
            ))}
        </div>
    )
    
}
export default Tags;