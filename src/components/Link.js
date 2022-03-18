const Link = ({link, linkName, linkText}) => {
  return (
    <div className='link'>
      <div className="linkText">
        <a href={link}>{linkName}</a>
        <p>{linkText}</p>
        </div>
    </div>
  )
}

export default Link 