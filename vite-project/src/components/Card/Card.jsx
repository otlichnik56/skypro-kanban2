import CardButton from '../CardButton/CardButton';
import CardDate from '../CardDate/CardDate';

function Card({ theme, title, date }) {
  return (
    <div className="cards__item">
      <div className="cards__card card">
        <div className="card__group">
          <div className={`card__theme _${getClassForTheme(theme)}`}>
            <p className={`_${getClassForTheme(theme)}`}>{theme}</p>
          </div>
          <CardButton />
        </div>
        <div className="card__content">
          <a href="" target="_blank">
            <h3 className="card__title">{title}</h3>
          </a>
          <CardDate date={date} />
        </div>
      </div>
    </div>
  );
}

function getClassForTheme(theme) {
    switch (theme) {
      case 'Web Design':
        return 'orange';
      case 'Research':
        return 'green';
      case 'Copywriting':
        return 'purple';
      default:
        return 'default'; 
    }
  }

export default Card;