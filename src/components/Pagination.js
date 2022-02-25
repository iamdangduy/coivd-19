import React from 'react';

function Pagination(props) {
    return (
        <div>
            <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item active">
                    <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;