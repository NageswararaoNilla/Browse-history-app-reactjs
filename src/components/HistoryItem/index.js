import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDelete} = props
  const {id, timeAccessed, title, logoUrl, domainUrl} = historyDetails

  const onRemove = () => {
    onDelete(id)
  }
  return (
    <li className="history-item">
      <p className="time">{timeAccessed}</p>
      <div className="logo-delete-container">
        <div className="logo-title-container">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="title-container">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          className="delete-icon"
          id={id}
          onClick={onRemove}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
