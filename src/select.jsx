export default function Select({ title, sort, year }) {
    return (
        <div className="sorting">
            <div className="sorting_pla">{title}</div>
            <select name="filter" id="">
                {
                    (title === 'Сортировать по:')
                    ? sort.map(item => (
                        <option value={item.option} key={item.option}>
                            {item.option}
                        </option>
                    )) 
                    : year.map(item => (
                        <option value={item.option} key={item.option}>
                            {item.option}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}