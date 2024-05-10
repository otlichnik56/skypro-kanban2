import Column from './Column';

function Content() {
    const columnsData = [
        {
          title: "Без статуса",
          cards: [
            { theme: "Web Design", title: "Название задачи", date: "30.10.23" },
            { theme: "Research", title: "Название задачи", date: "30.10.23" },
            { theme: "Web Design", title: "Название задачи", date: "30.10.23" },
            { theme: "Copywriting", title: "Название задачи", date: "30.10.23" },
            { theme: "Web Design", title: "Название задачи", date: "30.10.23" }
          ]
        },
        {
          title: "Нужно сделать",
          cards: [
            { theme: "Research", title: "Название задачи", date: "30.10.23" }
          ]
        },
        {
          title: "В работе",
          cards: [
            { theme: "Research", title: "Название задачи", date: "30.10.23" },
            { theme: "Web Design", title: "Название задачи", date: "30.10.23" },
            { theme: "Copywriting", title: "Название задачи", date: "30.10.23" }
          ]
        },
        {
          title: "Тестирование",
          cards: [
            { theme: "Research", title: "Тестирование модуля", date: "10.11.23" }
          ]
        },
        {
          title: "Готово",
          cards: [
            { theme: "Research", title: "Запуск продукта", date: "15.11.23" }
          ]
        }
    ];
    
    return (
        <main className="main">
          <div className="container">
            <div className="main__block">
                <div className="main__content">
                    {columnsData.map((column, index) => (
                        <Column key={index} title={column.title} cards={column.cards} />
                    ))}
              </div>
            </div>
          </div>
        </main>
    );
    
}

export default Content;