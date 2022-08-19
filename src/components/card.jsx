export const Card = ({repos}) => {
  return (
    <div>
        {repos.map(repo=>(
        <div className='card' key={repo.id}>
            <h2>{repo?.name}</h2>
        </div>
    ))}
    </div>
    
  )
}
