import React, {useEffect, useState} from 'react';

function VietNamToday() {

    const [cases, setCases] = useState([]);
    const [recovered, setRecovered] = useState([]);
    const [death, setDeath] = useState([]);


    useEffect(() => {
        fetch('https://static.pipezero.com/covid/data.json')
          .then(response => response.json())
          .then(cases => {
            setCases(new Intl.NumberFormat('de-DE').format(cases.today.internal.cases));
            setRecovered(new Intl.NumberFormat('de-DE').format(cases.today.internal.recovered));
            setDeath(new Intl.NumberFormat('de-DE').format(cases.today.internal.death));
          })
      }, [])

    return (
        <div className='VietNamToday'>
            <div className='row'>
                <div className='col-4'>
                <div className="alert alert-danger" role="alert">
                    <h3 className='title-cases'>Nhiễm</h3>
                    <h2 className='title-cases'>{cases}</h2>
                </div>
                </div>
                <div className='col-4'>
                <div className="alert alert-success" role="alert">
                    <h3 className='title-cases'>Khỏi</h3>
                    <h2 className='title-cases'>{recovered}</h2>
                </div>
                </div>
                <div className='col-4'>
                <div className="alert alert-dark" role="alert">
                    <h3 className='title-cases'>Tử vong</h3>
                    <h2 className='title-cases'>{death}</h2>
                </div>
                </div>
            </div>
        </div>
    )
}

export default VietNamToday;
