import "./PlatFormsCard.scss";

function PlatFormsCard(props) {
  let platform = props.platform;

  return (
    <div className="platform_card">
      <figure className="platform_card__thumb">
        <img src={props.image} alt="liberal" className="platform_card__image" />
        <figcaption className="platform_card__caption">
          <h2 className="platform_card__title">{platform.PartyName}</h2>

          <ul className="platform_card__snippet">
            <li>Party Leader: {platform.PartyLeader}</li>
            <li>Health Care: {platform.Environment ? "✅" : "❎"}</li>
            <li>Environment: {platform.HealthCare ? "✅" : "❎"}</li>
            <li>Job Creation: {platform.JobCreation ? "✅" : "❎"}</li>
          </ul>
          <a href={props.link} className="platform_card__button">
            Read more
          </a>
        </figcaption>
      </figure>
    </div>
  );
}

export default PlatFormsCard;
