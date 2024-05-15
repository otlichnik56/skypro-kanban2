import Column from '../Column/Column';
import data from '../../lib/mockData.js';

function Content() {
    
    return (
        <main className="main">
          <div className="container">
            <div className="main__block">
                <div className="main__content">
                    {data.map((column, index) => (
                        <Column key={index} title={column.title} cards={column.cards} />
                    ))}
              </div>
            </div>
          </div>
        </main>
    );
    
}

export default Content;