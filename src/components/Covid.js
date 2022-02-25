import React, {useEffect, useState} from 'react';

function Covid() {
  
  const [cases, setCases] = useState([]);
  
  useEffect(() => {
    fetch('https://static.pipezero.com/covid/data.json')
    .then(response => response.json())
    .then(cases => {
      setCases(cases.locations);
    })
  }, [])
  
    return (
        <div className='Covid'>
          <table className="table" >
            <thead className="thead-dark" >
              <tr >
                <th className="col-1">STT</th>
                <th className="col-4">Tỉnh</th>
                <th className="col-3">Số ca nhiễm</th>
                <th className="col-4">Tổng số ca nhiễm</th>
              </tr>
            </thead>
          </table>
          {cases.map((value, key) => (
            <table className="table" key={key}>
              <tbody>
                <tr>
                  <th className="col-1" >{key + 1}</th>
                  <td className="col-4" style={{fontSize: '20px'}}>{value.name}</td>
                  <td className="col-3" style={{color: "red", fontSize: '20px'}} >+{new Intl.NumberFormat('de-DE').format(value.casesToday)}</td>
                  <td className="col-4" >{new Intl.NumberFormat('de-DE').format(value.cases)}</td>
                </tr>
              </tbody>
            </table>
          ))}
      </div>
    )
}

export default Covid;
