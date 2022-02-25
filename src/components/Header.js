import React, {useEffect, useState} from 'react';




function Header() {

    const [day, setDay] = useState([]);

    useEffect(() => {
        fetch('https://static.pipezero.com/covid/data.json')
          .then(response => response.json())
          .then(day => {
            setDay(day.overview[6].date);
          })
      }, [])

    return (
        <div className='Header'>
            <div className="jumbotron text-center">
                <h1 className="display-3">Thống kê số ca COVID-19 ngày {day}</h1>
                <hr className="my-2" />
                <p>iamdangduy</p>
                <p className="lead">
                </p>
                </div>
        </div>
    )
}

export default Header;