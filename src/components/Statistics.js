export default function Statistics({ title, stats:{ info } }) {
    const list = info.map(it => {
        const id = "id" + Math.random().toString(16).slice(2);
        return (
          <li className="item" key={id}>
            <span className="label">{it.name}</span>
            <span className="percentage">{it.percentage}%</span>
          </li>
        );
    });
    if (title) {
        return (
          <section className="statistics">
            <h2 className="title">{ title }</h2>
            <ul className="stat-list">{list}</ul>
          </section>
        );
    }
    else {
        return (
          <section className="statistics">
            <ul className="stat-list">{list}</ul>
          </section>
        );
    }
    
}