import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

function Progress() {

    const [cases1, setCases1] = useState([]);
    const [cases2, setCases2] = useState([]);
    const [cases3, setCases3] = useState([]);
    const [cases4, setCases4] = useState([]);
    const [cases5, setCases5] = useState([]);
    const [cases6, setCases6] = useState([]);
    const [cases7, setCases7] = useState([]);
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');
    const [date3, setDate3] = useState('');
    const [date4, setDate4] = useState('');
    const [date5, setDate5] = useState('');
    const [date6, setDate6] = useState('');
    const [date7, setDate7] = useState('');
    const [avgcases, setAvgcases] = useState(0);

    useEffect(() => {
        fetch('https://static.pipezero.com/covid/data.json')
        .then(response => response.json())
        .then(cases => {
          setCases1(cases.overview[0].cases);
          setCases2(cases.overview[1].cases);
          setCases3(cases.overview[2].cases);
          setCases4(cases.overview[3].cases);
          setCases5(cases.overview[4].cases);
          setCases6(cases.overview[5].cases);
          setCases7(cases.overview[6].cases);
          setDate1(cases.overview[0].date);
          setDate2(cases.overview[1].date);
          setDate3(cases.overview[2].date);
          setDate4(cases.overview[3].date);
          setDate5(cases.overview[4].date);
          setDate6(cases.overview[5].date);
          setDate7(cases.overview[6].date);
          setAvgcases(cases.overview[6].avgCases7day);
          
        })
      }, [])

    
      let avg1 = (cases1/avgcases)*100;
      let avg2 = (cases2/avgcases)*100;
      let avg3 = (cases3/avgcases)*100;
      let avg4 = (cases4/avgcases)*100;
      let avg5 = (cases5/avgcases)*100;
      let avg6 = (cases6/avgcases)*100;
      let avg7 = (cases7/avgcases)*100;
    return (
        <div>
            <h3 className="mb-5">Số ca COVID từ {date1} tới nay <span className="badge badge-danger">New</span></h3>
            <div className="chart-layout">
                <div className="chart-layout__item" style={{height: `${avg1}%`}}>
                    <div>{cases1}</div>
                    <p className="chart-layout__dateBadge">{date1}</p>
                </div>
                <div className="chart-layout__item" style={{height: `${avg2}%`}}>
                    <div>{cases2}</div>
                    <p className="chart-layout__dateBadge">{date2}</p>
                </div>
                <div className="chart-layout__item" style={{height: `${avg3}%`}}>
                    <div>{cases3}</div>
                    <p className="chart-layout__dateBadge">{date3}</p>
                </div>
                <div className="chart-layout__item" style={{height: `${avg4}%`}}>
                    <div>{cases4}</div>
                    <p className="chart-layout__dateBadge">{date4}</p>
                </div>
                <div className="chart-layout__item" style={{height: `${avg5}%`}}>
                    <div>{cases5}</div>
                    <p className="chart-layout__dateBadge">{date5}</p>
                </div>
                <div className="chart-layout__item" style={{height: `${avg6}%`}}>
                    <div>{cases6}</div>
                    <p className="chart-layout__dateBadge">{date6}</p>
                </div>
                <div className="chart-layout__item" style={{height: `${avg7}%`}}>
                    <div>{cases7}</div>
                    <p className="chart-layout__dateBadge">{date7}</p>
                </div>
            </div>

            
        </div>

    )
}

export default Progress;